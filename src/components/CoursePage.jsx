import React from 'react'
import { useEffect, useState } from 'react'
//-----------------import axios that will help me to get my data----------
import axios from 'axios'


const CoursePage = () => {
    const [courses, setCourses] = useState([]);
    const [editingcourse, setEditingCourse] = useState(null)
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [newCourse, setNewCourse] = useState({name:'', Description:'', url:''})

    //use our useEffect hook to perform side effect in our components
    useEffect(() => {
      const myData = async () => {
        try {
          const result = await axios.get('http://localhost:3000/front/catalog');
          //
          setCourses(result.data)
          setLoading(false)
          
        }catch (error) {
            console.error('ran into an error while fectching course data', error)
            setLoading(false)
        };
      };
      //call my function
      myData();
    }, [])

    //---------------------------------------------------------------------------------------------------------------------------------------------
    //function to handle edit description
    const handleEdit = (course) => {
      setEditingCourse(course);
      setDescription(course.Description)// at this stage we have to pre-fill the form with the current description
    };

    //---------------------------------------------------------------------------------------------------------------------------------------------
    //function to handle each update
    const handleUpdate = async (e) => {
      e.preventDefault();

      try {
        const updateCourse = await axios.put(`http://localhost:3000/courses/${editingcourse._id}`, {...editingcourse, Description:description});

        //logic to update a description course
        setCourses(courses.map(course => course._id === editingcourse._id ? updateCourse.data:course));

        //calling the function to close the edit form
        setEditingCourse(null)
      } catch (error) {
        console.error("can't update course,something went wrong", error);
        setError('error to update course');
      }
    };

    //---------------------------------------------------------------------------------------------------------------------------------------------
    //function delete course
    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:3000/courses/${id}`);
        setCourses(courses.filter(course => course._id !== id));

      } catch (err) {
        console.err('error to delete course', error)
        setError('error deleting course')
      }
    };

    //---------------------------------------------------------------------------------------------------------------------------------------------
    //function to handle courses created
    const handleCreate = async (e) => {
      e.preventDefault()
      try {
        const myCourse = await axios.post(`http://localhost:3000/courses`, newCourse)
        setNewCourse([...courses, myCourse.data]);
        setNewCourse({name:'', Description:'', url:''});

      } catch (error) {
        console.error("can't create a new course", error)
        setError('error creating newcourse')
      }
    };

    //---------------------------------------------------------------------------------------------------------------------------------------------
       //here we are going to make a form that allow to "create a new course" and render our data also
    //---------------------------------------------------------------------------------------------------------------------------------------------
    //contain to be display with logic,
    
  return ( 
    <div>
        <form onSubmit={handleCreate }>
          <labe>
            Name:
            <input type='text' value={newCourse.name} onChange={(e) => setNewCourse({...newCourse, Description: e.target.value})} required
            />
          </labe>

          <br/>
          <label>
            Description:
            {/*we will used a textarea tag to specify we want to write a new value or text*/ }
            <textarea value={newCourse.Description}
              onChange={(e) => setNewCourse({...newCourse, Description: e.target.value})} required
            />
          </label>

          <br/>
          <button type='submit'>Add-Course</button>
        </form>

  {/*---------------------------------------------------------------------------------------------------------------------------------------- */}


        <h1>COURSES MATERIALS</h1>
        <div className="course-list">
        {/* using the map() to render the data in my database */}
            { courses.length > 0 ? courses.map((course) => (
               <div key={course._id} className='course-item'>
                 {/* <p>successfully loaded</p> */}
                <h2>{course.name}</h2>
                <p>{course.Description}</p>
                {/**/}
                <iframe
                    width="570"
                    height="315"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
                    allowFullScreen
                    src={course.url}
                    title={course.name}>
                    </iframe>
              </div>
            )) : <p>this is loading</p>}
        </div>
    </div>
  )
}

export default CoursePage