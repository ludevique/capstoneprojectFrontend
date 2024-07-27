import React from 'react'
import { useEffect, useState } from 'react'
//-----------------import axios that will help me to get my data----------
import axios from 'axios'

const CoursePage = () => {
    const [courses, setCourses] = useState([]);

    //use our useEffect hook to perform side effect in our components
    useEffect(() => {
      const myData = async () => {
        try {
          const result = await axios.get('/course');
          //
          setCourses(result.data)
          
        }catch (error) {
            console.error('ran into an error while fectching course data',error)
        };
      };
      //call my function
      myData();
    }, [])

  return (
    <div>
        <Link to='/course'>
            <h1>COURSES MATERIALS</h1>
        </Link>
    </div>
  )
}

export default CoursePage