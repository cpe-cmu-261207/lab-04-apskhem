import { Component } from "react";

interface CourseListProps {
  courseId: string;
  courseName: string;
  credit: Credit;
  grade: Grade;
  onDeleteHandler: () => void;
}

class CourseCard extends Component<CourseListProps> {

  public constructor(props: CourseListProps) {
    super(props);
  }

  public get netWeight(): number {
    return this.props.grade === "W" ? 0 : this.props.credit;
  }

  public get sumWeight(): number {
    return this.netWeight * this.gradeAsNumber;
  }

  public get gradeAsNumber(): number {
    switch (this.props.grade) {
      case "A": return 4;
      case "B+": return 3.5;
      case "B": return 3;
      case "C+": return 2.5;
      case "C": return 2;
      case "D+": return 1.5;
      case "D": return 1;
      case "F": return 0;
      case "W": return 0;
      default: throw Error("Cannot get grade as number");
    }
  }

  public render(): JSX.Element {
    return (
      <div className="course-list">
        <aside className="course-name-container">
          <div>
            <li className="course-name">{this.props.courseName}</li>
            <li className="course-id">{this.props.courseId}</li>
          </div>
        </aside>
        <aside className="course-grade-contaienr">
          <li className="course-grade">{this.props.grade}
            <sub className="course-credit">{this.props.credit}</sub>
          </li>
        </aside>
        <aside className="flex-center">
          <i className="fas fa-times course-delete-icon" onClick={this.props.onDeleteHandler}></i>
        </aside>
      </div>
    );
  }
}

export default CourseCard;