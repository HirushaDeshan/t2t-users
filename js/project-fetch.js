const projectList = document.querySelector('.project-list');

// Make HTTP GET request to retrieve project data
fetch(API_URL + '?action=get-4projects')
  .then(response => response.json())
  .then(data => {
    projectList.innerHTML = '';
    // Loop through each project and create a list item
    data.records.forEach(project => {
      const listItem = document.createElement('li');
      listItem.classList.add('project-list-item');

      // Create project title
      const title = document.createElement('div');
      title.classList.add('project-title');
      title.textContent = project.Title;
      listItem.appendChild(title);

      // Create project details
      const details = document.createElement('div');
      details.classList.add('project-details');

      // Create project detail items
      const detailItemsPart1 = [
        { icon: 'fas fa-building', label: 'Company', value: project.Company,  },
        { icon: 'fas fa-bullseye', label: 'Goal', value: project.Goal },
      ];
      const detailItems = [
        { icon: 'fas fa-users', label: 'Minimum Team', value: project.Team !== "" ? project.Team : 'N/A'},
        { icon: 'far fa-clock', label: 'Duration', value: project.Duration },
      ];
      

      // Loop through each detail item and create a span element
      detailItemsPart1.forEach(item => {
        const div = document.createElement('div');
        const span = document.createElement('span');
        span.innerHTML = `<i class="${item}">`;
        div.appendChild(span);

        const value = document.createElement('p');
        value.innerHTML = item.value;
        div.appendChild(value);
        div.classList.add(item.label.toLowerCase()); // Add a class based on the label
        details.appendChild(div);
      });

      detailItems.forEach(item => {
        const div = document.createElement('div');
        const span = document.createElement('span');
        span.innerHTML = `<i class="${item.icon}"></i>&nbsp; ${item.label}:`;
        div.appendChild(span);

        const value = document.createElement('p');
        value.innerHTML = item.value;
        div.appendChild(value);
        details.appendChild(div);
        // Add a class based on the label to the div
        div.classList.add(item.label.replace(' ', '').toLowerCase());
        details.appendChild(div);
      });

      listItem.appendChild(details);

      projectList.appendChild(listItem);
    });
  })
  .catch(error => console.error(error));

