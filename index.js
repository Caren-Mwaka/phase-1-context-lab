// createEmployeeRecord
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  const employeeRecord = {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: []
  };
  console.log("Created employee record:", employeeRecord);
  return employeeRecord;
}

// createEmployeeRecords
function createEmployeeRecords(employeeData) {
  const employees = employeeData.map(createEmployeeRecord);
  console.log("Created employee records:", employees);
  return employees;
}

// createTimeInEvent
function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date
  });
  console.log("Added time-in event:", this);
  return this;
}

// createTimeOutEvent
function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date
  });
  console.log("Added time-out event:", this);
  return this;
}

// hoursWorkedOnDate
function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find(event => event.date === date).hour;
  const timeOut = this.timeOutEvents.find(event => event.date === date).hour;
  const hoursWorked = (timeOut - timeIn) / 100;
  console.log(`Hours worked on ${date}:`, hoursWorked);
  return hoursWorked;
}

// wagesEarnedOnDate
function wagesEarnedOnDate(date) {
  const wages = hoursWorkedOnDate.call(this, date) * this.payPerHour;
  console.log(`Wages earned on ${date}: $${wages}`);
  return wages;
}

// allWagesFor
function allWagesFor() {
  const datesWorked = this.timeInEvents.map(event => event.date);
  const totalWages = datesWorked.reduce((total, date) => total + wagesEarnedOnDate.call(this, date), 0);
  console.log("Total wages for employee:", totalWages);
  return totalWages;
}

// findEmployeeByFirstName
function findEmployeeByFirstName(srcArray, firstName) {
  const employee = srcArray.find(employee => employee.firstName === firstName);
  console.log(`Found employee ${firstName}:`, employee);
  return employee;
}

// calculatePayroll
function calculatePayroll(employees) {
  const totalPayroll = employees.reduce((total, employee) => total + allWagesFor.call(employee), 0);
  console.log("Total payroll for all employees:", totalPayroll);
  return totalPayroll;
}

// Create employee record
const carenMwaka = createEmployeeRecord(["John", "Doe", "Developer", 25]);

// Clock in and out events
createTimeInEvent.call(johnDoe, "2022-04-08 0800");
createTimeOutEvent.call(johnDoe, "2022-04-08 1700");

// Calculate wages for a specific date
wagesEarnedOnDate.call(johnDoe, "2022-04-08");

// Find employee by first name
findEmployeeByFirstName([johnDoe], "John");

// Calculate total payroll
calculatePayroll([johnDoe]);
