let div=document.getElementById("part3");
let data=[
    {
    image:"https://tmetric.com/media/fqmd4fox/icon-guide-getting-started.svg",
    name:"Getting Started",
    desc:"This section explains what a new TMetric user should know and do to quickly start tracking their work time."
    },
    {
        image:"https://tmetric.com/media/pgxe2341/icon-guide-time-tracking.svg",
        name:"Time Tracking",
        desc:"Learn how to manage and lock time, link tasks to time entries, set a required work schedule and permissions."
    },
    {
        image:"https://tmetric.com/media/nhhdfvxt/tasks.svg",
        name:"Tasks",
        desc:"Learn about task management - how to create and edit tasks, customize a task list, and share tasks with others."
    },    
    {
        image:"https://tmetric.com/media/ajnblb01/icon-guide-projects.svg",
        name:"Projects",
        desc:"This section includes information about creating different types of projects, setting up budgets, and invoicing clients for work days."
    },   
    {
        image:"https://tmetric.com/media/jxsewpku/icon-guide-reports.svg",
        name:"Reports",
        desc:"General information about using reports in TMetric to review and analyze your time tracking data."
    },   
    {
        image:"https://tmetric.com/media/42if5ekb/icon-guide-billing-invoicing.svg",
        name:"Invoices",
        desc:"Make invoicing painless, just go through a learning process described in this section and get paid on time."
    },   
    {
        image:"https://tmetric.com/media/5uzjal2u/icon-guide-time-off.svg",
        name:"Time Off",
        desc:"Learn how to simplify employee paid time off and vacation tracking: set up time off policies and properly compensate days off."
    },   
    {
        image:"https://tmetric.com/media/0ssdlvqw/icon-guide-productivity-tracking.svg",
        name:"Productivity Tracking",
        desc:"Here you will find everything about productivity tracking - what activity level is and where to get user activity details."
    },   
    {
        image:"https://tmetric.com/media/sa1fife4/icon-guide-team-management.svg",
        name:"Team Management",
        desc:"Learn about team management - how to add people to your workspace, create a team, and monitor and payroll its work."
    },   
    {
        image:"https://tmetric.com/media/lkpdnu2f/icon-guide-workspace-management.svg",
        name:"Workspace Management",
        desc:"Configure your workspace, manage members, learn user roles and track your time as a team in TMetric."
    },   
    {
        image:"https://tmetric.com/media/rfij2vrr/icon-guide-apps.svg",
        name:"Apps",
        desc:"This topic describes a broad range of TMetric apps: how to install and use them and the features they provide.&nbsp;"
    },   
    {
        image:"https://tmetric.com/media/mpdjzi1w/icon-guide-integrations.svg",
        name:"Integrations",
        desc:"Integrate TMetric with various time and project management systems to track time, create reports, and monitor your team."
    },   
    {
        image:"https://tmetric.com/media/iuyisza0/icon-guide-user-account.svg",
        name:"User Account Management",
        desc:"Here&nbsp;you will find all the necessary information about a user account in TMetric and how to manage&nbsp;it&nbsp;with ease."
    },   
    {
        image:"https://tmetric.com/media/srnmkwja/icon-guide-subscription-billing.svg",
        name:"Subscription & Billing",
        desc:"This section provides information about the subscription and billing process in TMetric to understand how it all works."
    },   
];
// console.log(data);
    data.forEach(element => {
        let card=document.createElement("div");
        card.setAttribute("id","card");
        let smalldiv=document.createElement("div");
        smalldiv.setAttribute("id","p3div1");
        let img=document.createElement("img");
        img.src=element.image;
        let name=document.createElement("h3");
        name.innerText=element.name;
        let description=document.createElement("p");
        description.setAttribute("id", "samplepara")
        description.innerText=element.desc;
        smalldiv.append(img,name);
        card.append(smalldiv,description);
        div.append(card);
    });
