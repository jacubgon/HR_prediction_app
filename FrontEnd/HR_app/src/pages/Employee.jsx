import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

function Employee() {
  const [employees, setEmployees] = useState([]);

  async function test() {
    const res = await axios.get("https://prueba-server.onrender.com/employees");
    setEmployees(res.data);
  }

  useEffect(() => {
    test();
  }, []);

  function getColorClassName(satisfaction) {
    if (satisfaction === "Medium") {
      return "medium";
    } else if (satisfaction === "Low") {
      return "low";
    } else if (satisfaction === "High") {
      return "high";
    } else if (satisfaction === "Very High") {
      return "very-high";
    }

    return "";
  }
  function getColorClassName(involvement) {
    if (involvement === "Medium") {
      return "medium";
    } else if (involvement === "Low") {
      return "low";
    } else if (involvement === "High") {
      return "high";
    } else if (involvement === "Very High") {
      return "very-high";
    }

    return "";
  }
  function getColorClassName(environment) {
    if (environment === "Medium") {
      return "medium";
    } else if (environment === "Low") {
      return "low";
    } else if (environment === "High") {
      return "high";
    } else if (environment === "Very High") {
      return "very-high";
    }

    return "";
  }

  return (
    <div>
      {employees.map((employee) => (
        <div className="employeeContainer" key={employee.id}>
          <div className="UpContainer">
            <div className="employeeImage">
              <Avatar style={{ height: "100px", width: "100px" }}>
                {employee.name.substring(0, 2).toUpperCase()}
              </Avatar>
            </div>
            <div className="leftUp">
              <p>Name: {employee.name}</p>
              <p>Department: {employee.department}</p>
              <p>Role: {employee.role}</p>
              <p>Job Level: {employee.job_level}</p>
              <p>Education: {employee.education}</p>
            </div>
            <div className="rightUp">
              <div className="prediction" style={{ display: "flex" }}>
                <h4 className="risk">
                  PREDICTION RISK <br />
                  <span>{employee.risk}</span>
                </h4>
                <h4 className="month">
                  PREDICTION (MONTHS) <br />
                  <span>{employee.replacement_month}</span>
                </h4>
              </div>
              <div className="cost-month">
                <h5>Replacement Cost {employee.replacement_cost}</h5>
                <h5>Months Left {employee.months_left}</h5>
              </div>
            </div>
          </div>
          <div
            className="downContainer"
            style={{ display: "flex", justifyItems: "flex-end" }}
          >
            <div className="leftDown">
              <TableContainer
                component={Paper}
                style={{
                  backgroundColor: "transparent",
                  border: "2px #1d3557 solid",
                  borderRadius: "10px",
                  boxShadow: "8px 8px 10px 0px rgba(29,53,87,1)",
                }}
              >
                <Table sx={{ minWidth: 400 }} aria-label="simple table">
                  <TableBody>
                    <TableRow>
                      <TableCell
                        style={{ color: "#f1faee" }}
                        component="th"
                        scope="row"
                      >
                        Job Involving
                      </TableCell>
                      <TableCell align="center"
                      className={getColorClassName(employee.involvement)}>
                        {employee.involvement}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{ color: "#f1faee" }}
                        component="th"
                        scope="row"
                      >
                        Environment
                      </TableCell>
                      <TableCell
                        align="center"
                        className={getColorClassName(employee.environment)}
                      >
                        {employee.environment}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{ color: "#f1faee" }}
                        component="th"
                        scope="row"
                      >
                        Satisfaction
                      </TableCell>
                      <TableCell
                        align="center"
                        className={getColorClassName(employee.satisfaction)}
                      >
                        {employee.satisfaction}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{ color: "#f1faee" }}
                        component="th"
                        scope="row"
                      >
                        Salary Hike
                      </TableCell>
                      <TableCell align="center">
                        {employee.salary_hike}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="rightDown">
              <h4>Life Balance : {employee.life_balance}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Employee;
