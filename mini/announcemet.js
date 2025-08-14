const latestUpdates = [
    {
      title: "Upcoming Event:",
      description: " cricket Tournament on july 26-2025, Register your team by july 5th, 2025."
    },
    {
      title: "Important:",
      description: "All sports teams are required to attend the mandatory meeting on june 12, 2025, at 2 PM in the  sritham ground to discuss the upcoming schedule and rules."
    },
    {
      title: "New:",
      description: "The college is introducing a new sports scholarship program for outstanding athletes. Apply by october 1, 2025, to be considered."
    }
  ];
  
  const thisWeekSchedule = [
    {
      day: "Monday, September 6",
      event: "Men's Cricket practice at 3 PM"
    },
    {
      day: "Tuesday, September 7",
      event: "Women's Throwball game against SRU College at 2 PM"
    },
    {
      day: "Wednesday, September 8",
      event: "Yoga session for all athletes at 6 AM"
    }
  ];
  
  const nextWeekSchedule = [
    {
      day: "Monday, September 13",
      event: "Tabletennis tournament registration deadline"
    },
    {
      day: "Tuesday, September 14",
      event: "Vollyball practice at 2 PM"
    }
  ];
  
  const sportsNews = [
    {
      title: "Congratulations:",
      description: "Our college Throwballball team won the regional championship last weekend! Well done, team!"
    },
    {
      title: "Tryouts:",
      description: "The college is holding tryouts for the men's cricket team on june 15. Interested students should contact Coach Karthik at 	vanamakarthik351@gmail.com."
    }
  ];
  
  const importantReminders = [
    {
      title: "Physicals:",
      description: "All athletes must submit their physical examination forms by August 31, 2025, to participate in sports activities."
    },
    {
      title: "Equipment:",
      description: "Please return all borrowed sports equipment to the Sports Managment by October 15, 2025, to avoid fines."
    }
  ];
  function populateLists() {
    const latestUpdatesList = document.getElementById("latest-updates-list");
    const thisWeekScheduleList = document.getElementById("this-week-schedule");
    const nextWeekScheduleList = document.getElementById("next-week-schedule");
    const sportsNewsList = document.getElementById("sports-news-list");
    const importantRemindersList = document.getElementById("important-reminders-list");
    latestUpdates.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${item.title}</strong> ${item.description}`;
      latestUpdatesList.appendChild(listItem);
    });
    thisWeekSchedule.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `${item.day}: ${item.event}`;
      thisWeekScheduleList.appendChild(listItem);
    });
    nextWeekSchedule.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `${item.day}: ${item.event}`;
      nextWeekScheduleList.appendChild(listItem);
    });
    sportsNews.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${item.title}</strong> ${item.description}`;
      sportsNewsList.appendChild(listItem);
    });
    importantReminders.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${item.title}</strong> ${item.description}`;
      importantRemindersList.appendChild(listItem);
    });
  }
  populateLists();