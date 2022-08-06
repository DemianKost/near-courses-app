import React, { useEffect, useState, useCallback } from "react";
import AddCourse from "./AddCourse";
import Course from "./Course";
import Loader from "../utils/Loader";
import { Row } from "react-bootstrap";
import {
  getCourses as getCoursesList,
  buyCourse,
  createCourse,
} from "../../utils/courses";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    const getCourses = useCallback(async () => {
        try {
        setLoading(true);
            setCourses(await getCoursesList());
        } catch (error) {
        console.log({ error });
        } finally {
            setLoading(false);
        }
    });

    const addCourse = async (data) => {
        try {
          setLoading(true);
          createCourse(data).then((resp) => {
            getCourses();
          });
          alert('Course added successfully.');
        } catch (error) {
          console.log({ error });
          alert('Failed to purchase course.');
        } finally {
          setLoading(false);
        }
    };

    const buy = async (id, price) => {
        try {
          await buyCourse({
            id,
            price,
          }).then((resp) => getCourses());
          alert('Course buy works');
        } catch (error) {
          alert('Failed to purchase course.');
        } finally {
          setLoading(false);
        }
    };

    useEffect(() => {
        getCourses();
    }, []);

    return (
        <>
          {!loading ? (
            <>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="fs-4 fw-bold mb-0">Courses</h1>
                <AddCourse save={addCourse} />
              </div>
              <Row xs={1} sm={2} lg={3} className="g-3  mb-5 g-xl-4 g-xxl-5">
                {courses.map((_course) => (
                  <Course
                    course={{
                      ..._course,
                    }}
                    buy={buy}
                  />
                ))}
              </Row>
            </>
          ) : (
            <Loader />
          )}
        </>
    );
}

export default Courses;