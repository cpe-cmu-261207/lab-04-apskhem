import React, { Component } from "react";
import CourseCard from "./components/CourseCard";

interface AppProps { }
interface AppState {
  courseList: CourseCard[];
  courseIdInput: string,
  courseNameInput: string,
  selCredit: Credit;
  selGrade: Grade;
  errorText: string;
}

class App extends Component<AppProps, AppState> {

  public grade = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
  public credit = [1, 2, 3];

  public state = {
    courseList: [] as CourseCard[],
    courseIdInput: "",
    courseNameInput: "",
    selCredit: 1 as Credit,
    selGrade: "F" as Grade,
    errorText: ""
  };

  public constructor(props: AppProps) {
    super(props);
  }

  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  public calculateGPA(): number {
    // TODO
    let weight = 0;
    let sumWeight = 0;

    for (const list of this.state.courseList) {
      weight += list.netWeight;
      sumWeight += list.sumWeight;
    }

    return weight ? sumWeight / weight : 0;
  }

  public calculateWeight(): number {
    // TODO
    let weight = 0;

    for (const list of this.state.courseList) {
      weight += list.netWeight;
    }

    return weight;
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event
   */
  private addCourse(): void {
    // TODO
    if (!this.validateInputForm()) return;

    const courseId = this.state.courseIdInput;
    const courseName = this.state.courseNameInput;
    const credit = this.state.selCredit;
    const grade = this.state.selGrade;

    const l = new CourseCard({ courseId, courseName, credit, grade, onDeleteHandler: () => this.onDeleteCourse(courseId) });

    this.setState({ courseList: [...this.state.courseList, l] });

    this.calculateGPA();
    this.resetInputForm();
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id
   */
  private onDeleteCourse(id: string): void {
    // TODO
    this.setState({ courseList: this.state.courseList.filter((list) => id !== list.props.courseId) });
  }

  private setCourseIdHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ courseIdInput: e.target.value });
  }

  private setCourseNameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ courseNameInput: e.target.value });
  }

  public resetInputForm(): void {
    this.setState({
      courseIdInput: "",
      courseNameInput: "",
      selCredit: 1,
      selGrade: "F"
    });
  }

  public validateInputForm(): boolean {
    // case: empty course id
    if (!this.state.courseIdInput) {
      this.setState({ errorText: "define course id!" });
      return false;
    }
    // case: empty course name
    if (!this.state.courseNameInput) {
      this.setState({ errorText: "define course name!" });
      return false;
    }
    // case: duplicate course id
    if (this.state.courseList.some((list) => this.state.courseIdInput === list.props.courseId)) {
      this.setState({ errorText: "duplicate course id!" });
      return false;
    }

    this.setState({ errorText: "" });
    return true;
  }

  private renderCreditList(): JSX.Element[] {
    const a = [1, 2, 3] as Credit[];

    return a.map((value) => {
      const e = () => this.setState({ selCredit: value });

      return <div key={value} className={value === this.state.selCredit ? " sel" : ""} onClick={e}>{value}</div>
    });
  }

  private renderGradeList(): JSX.Element[] {
    const a = ["F", "W", "D", "D+", "C", "C+", "B", "B+", "A"] as Grade[];

    return a.map((value) => {
      const c = value.replace("+", "p").toLowerCase() + "-icon";
      const e = () => this.setState({ selGrade: value });

      return <div key={value} className={`${c}${value === this.state.selGrade ? " sel" : ""}`} onClick={e}>{value}</div>;
    });
  }

  private renderCourseCards(): JSX.Element[] {
    return this.state.courseList.map((list) => {
      return <CourseCard key={list.props.courseId} {...list.props}/>;
    });
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <header>
          <li className="head-text">GPA Calculator</li>
        </header>
        <main className="app-container">
          <div className="content-container">
            <aside id="gpa-display-box" className="flex-center">
              <div>
                <li id="gpa-display-pretext">Your GPA is</li>
                <li id="gpa-display-text">{this.calculateGPA().toFixed(2)}</li>
                <li id="gpa-display-credit">
                  with total credit of {this.calculateWeight()} from {this.state.courseList.length} {this.state.courseList.length === 1 ? "course" : "courses"}
                </li>
              </div>
            </aside>
            <aside id="list-display-box" className="neumorphism-container fansy-drop-shadow">
              <li className="course-header-text">My course list<span id="error-text">{this.state.errorText}</span></li>
              <div id="list-container">
                {this.renderCourseCards()}
              </div>
              <div id="course-create-box">
                <aside>
                  <div id="course-input-align-1">
                    <aside>
                      <input type="text" value={this.state.courseIdInput} placeholder="course id" maxLength={6} onChange={this.setCourseIdHandler}/>
                    </aside>
                    <aside>
                      <input type="text" value={this.state.courseNameInput} placeholder="course name" onChange={this.setCourseNameHandler}/>
                    </aside>
                  </div>
                  <div id="course-input-align-2">
                    <aside id="create-credit-selector">
                      {this.renderCreditList()}
                    </aside>
                    <aside id="create-grade-selector">
                      {this.renderGradeList()}
                    </aside>
                  </div>
                </aside>
                <aside id="create-btn" className="flex-center" onClick={() => this.addCourse()}>
                  <i className="fas fa-plus"></i>
                </aside>
              </div>
            </aside>
          </div>
        </main>
        <footer>
          <li>Created by Apisit Ritreungroj &copy; 2020. Lab IV for CPE207, React with TypeScript</li>
        </footer>
        {/* TODO add course input form */}
        {/* TODO display calculated GPA */}
        {/* TODO display courses */}
      </React.Fragment>
    );
  }
}

export default App;
