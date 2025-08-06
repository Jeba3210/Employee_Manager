document.getElementById('addBtn').addEventListener('click', addEmployee);

let employees = [];
let employeeId = 1;

function addEmployee() {
	const name = document.getElementById('name').value.trim();
	const profession = document.getElementById('profession').value.trim();
	const age = document.getElementById('age').value.trim();
	const messageDiv = document.getElementById('message');

	// Reset message
	messageDiv.textContent = '';
	messageDiv.className = 'message';

	if (name === '' || profession === '' || age === '') {
		messageDiv.textContent = 'Error: Please fill all the fields.';
		messageDiv.classList.add('error');
		return;
	}

	const newEmployee = {
		id: employeeId++,
		name,
		profession,
		age: Number(age),
	};

	employees.push(newEmployee);

	messageDiv.textContent = 'Success: Employee added!';
	messageDiv.classList.add('success');

	// Reset inputs
	document.getElementById('name').value = '';
	document.getElementById('profession').value = '';
	document.getElementById('age').value = '';

	renderEmployees();
}

function deleteEmployee(id) {
	employees = employees.filter((emp) => emp.id !== id);
	renderEmployees();
}

function renderEmployees() {
	const container = document.getElementById('employeeList');
	container.innerHTML = '';

	if (employees.length === 0) {
		container.innerHTML = '<p>No employees added yet.</p>';
		return;
	}

	employees.forEach((emp) => {
		const card = document.createElement('div');
		card.className = 'employee-card';
		card.innerHTML = `
      <p><strong>ID:</strong> ${emp.id}</p>
      <p><strong>Name:</strong> ${emp.name}</p>
      <p><strong>Profession:</strong> ${emp.profession}</p>
      <p><strong>Age:</strong> ${emp.age}</p>
      <button onclick="deleteEmployee(${emp.id})">Delete</button>
    `;
		container.appendChild(card);
	});
}
