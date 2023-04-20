import "./styles.css";
// import employees from "./employeeData";
import employees from "./employeeData";

export default function App() {
  /* 
    TODO: 
    List active tech employees by department
  */

  // create array of techEmployees from "tech" tag
  const techEmployees = [];
  employees.forEach((employee) => {
    if (employee.tags !== undefined) {
      employee.tags.forEach((tag) => {
        if (tag == "tech") {
          techEmployees.push(employee);
        }
      });
    }
  });

  // create set of departments with tech employees
  const keySet = new Set();
  techEmployees.forEach((employee) => {
    if (employee.department in keySet == false) {
      keySet.add(employee.department);
    }
  });

  // set departments as keys for departmentDictionary
  let departmentDictionary = {};
  keySet.forEach((key) => {
    departmentDictionary[key] = [];
  });

  // append employees as values to departmentDictionary
  techEmployees.forEach((employee) => {
    if (employee.department in departmentDictionary == true) {
      departmentDictionary[employee.department].push(employee);
    }
  });

  // convert dictionary to array
  let arrayDict = Object.entries(departmentDictionary);

  /**
   * loops through input array and appends employees from the same department to deptArr
   * @param dict as array
   * @param dept as string
   * @returns array
   */
  const createDepartmentArray = (arryaDict, dept) => {
    let deptArr = [];
    arrayDict.forEach((deptartment) => {
      if (deptartment[0] == dept) {
        deptartment[1].forEach((employee) => {
          deptArr.push(employee);
        });
      }
    });
    return deptArr;
  };

  let keys = [...keySet];
  let sortedKeys = keys.sort();

  // loop through keys and call test()
  let vals = [];
  sortedKeys.forEach((key) => {
    vals.push(createDepartmentArray(arrayDict, key));
  });

  return (
    <>
      <div className="container">
        <div className="list">
          <h2>{sortedKeys[0]}</h2>
          {vals[0].map((val) => {
            return (
              <div className="departmentList">
                <a href=""> {val.name}</a>
                <p> {"  (" + val.tags + ")"}</p>
              </div>
            );
          })}
        </div>

        <div className="list">
          <h2>{sortedKeys[1]}</h2>
          {vals[1].map((val) => {
            return (
              <div className="departmentList">
                <a href=""> {val.name}</a>
                <p> {"  (" + val.tags + ")"}</p>
              </div>
            );
          })}
        </div>

        <div className="list">
          <h2>{sortedKeys[2]}</h2>
          {vals[1].map((val) => {
            return (
              <div className="departmentList">
                <a href=""> {val.name}</a>
                <p> {"  (" + val.tags + ")"}</p>
              </div>
            );
          })}
        </div>

        <div className="list">
          <h2>{sortedKeys[3]}</h2>
          {vals[1].map((val) => {
            return (
              <div className="departmentList">
                <a href=""> {val.name}</a>
                <p> {"  (" + val.tags + ")"}</p>
              </div>
            );
          })}
        </div>

        <div className="list">
          <h2>{sortedKeys[4]}</h2>
          {vals[1].map((val) => {
            return (
              <div className="departmentList">
                <a href=""> {val.name}</a>
                <p> {"  (" + val.tags + ")"}</p>
              </div>
            );
          })}
        </div>

        <div className="list">
          <h2>{sortedKeys[5]}</h2>
          {vals[1].map((val) => {
            return (
              <div className="departmentList">
                <a href=""> {val.name}</a>
                <p> {"  (" + val.tags + ")"}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
