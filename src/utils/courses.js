import { v4 as uuid4 } from "uuid";
import { parseNearAmount } from "near-api-js/lib/utils/format";

const GAS = 100000000000000;

export function createCourse(course) {
    course.id = uuid4();
    course.price = parseNearAmount(course.price + "");
    return window.contract.setCourse({ course });
}

export function getCourses() {
    return window.contract.getCourses();
}

export function deleteCourse(id) {
    return window.contract.deleteCourse({ courseId: id });
}

export async function buyCourse({ id, price }) {
    await window.contract.buyCourse({ courseId: id }, GAS, price);
}