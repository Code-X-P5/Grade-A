import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { RiFilter3Line } from "react-icons/ri";
import Filter from './Filter';

const token = localStorage.getItem('token');

const AllCourses = ({ match: { params: { id } } }) => {
	const [allCourses, setAllCourses] = useState([]);
	const [details, setDetails] = useState([]);
	const [toggle, setToggle] = useState(true);

	useEffect(() => {
		getAllCoursesByInstructor()
		getInstructor_datails()
	}, [id])

	const getAllCoursesByInstructor = () => {
		axios.get(`http://localhost:5000/students/instructor_courses/${id}`, { headers: { authorization: token }, })
			.then((response) => {
				setAllCourses(response.data);
			})
			.catch((err) => { console.log('err :', err) });
	};

	const getInstructor_datails = () => {
		axios.get(`http://localhost:5000/students/instructor_datails/${id}`, { headers: { authorization: token }, })
			.then((response) => {
				console.log('response.data :', response.data)
				setDetails(...response.data);
			})
			.catch((err) => { console.log('err :', err) });
	};

	const countResults = allCourses.reduce((acc) => acc + 1, 0)
	const div = (
		<>
			<div className='coursesCards'>
				<h2>Instructor info</h2>
				<h5>name: {details.name}</h5>
				<h5>credentials: {details.credentials}</h5>
				<h5>email: {details.email}</h5>
				<h5>phone: {details.phone}</h5>
				<h5>adress: {details.adress}</h5>
				<h1 className='tt'>
					Courses
				<div className='countResults'>
						{countResults} results
					</div>
				</h1>
				{
					allCourses.map((e, i) => (
						<Link to={`/students/courses/${e.courseId}`} key={i}>
							<div className='oneCourse' >
								<div className='imgCourse'>
									<img className='imgCourse' src={`${e.img_course}`} alt={`${e.course}`} />
								</div>
								<div className='oneCourse2'>
									<div> {e.course} </div>
									<div> {e.description} </div>
									<div> {e.category} </div>
									<div> {e.instructor} </div>
									<div> {e.rating} </div>
								</div>
								<div className='oneCourse3'>
									<div> $ {e.price} </div>
									<div> more details... </div>
								</div>
							</div>
						</Link>
					))
				}
			</div>
		</>
	)

	if (toggle) {
		return (
			<div>
				<div className='filter'>
					<button onClick={() => { setToggle(!toggle) }}><RiFilter3Line /> Filter</button>
				</div>
				<div className='coursesMain'>
					<Filter />
					{div}
				</div>
			</div>
		);
	}
	return (
		<div>
			<div className='filter'>
				<button onClick={() => { setToggle(!toggle) }}><RiFilter3Line /> Filter</button>
			</div>
			<div >
				<Filter />
				{div}
			</div>
		</div>
	);
};
export default AllCourses;