$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************

//-----------------------------------------------------------------------------------------------------------------------
//3.
    
    const userN = $("#username");   //creates jquery object to get element by id="username"
    userN.html(username);           //sets inner html content to js object username above (a)

    const revAmt = $(".revenue-amt");   //creates jquery object to get element by class="revenue-amt"
    revAmt.html(revenueAmt);           //sets inner html content to js object revenueAmt above (b)

    const numCustomers = $("#customer-num");   //creates jquery object to get element by id="customer-num"
    numCustomers.html(customerNum);           //sets inner html content to js object numCustomers above (c)

    const numOrders = $("#orders-amt");   //creates jquery object to get element by id="orders-amt"
    numOrders.html(ordersAmt);           //sets inner html content to js object numOrders above (d)

    const numIssues = $("#issues-amt");   //creates jquery object to get element by id="issues-amt"
    numIssues.html(issuesAmt);           //sets inner html content to js object numIssues above (e)

    const overviewRev = $(".revenue-amt");   //creates jquery object to get element by class="revenue-amt"
    overviewRev.html(revenueAmt);           //sets inner html content to js object revenueAmt above (f)

    
    
    var salesTable = $("#salesTableBody");  //creates jquery object to get element by id="salesTableBody"
    function setSalTable(){                    //function to populate the sales table
        sales.forEach( sale => {            //for all sales in the sales array/list
            const row = $("<tr>");                //create a new table row
            
            const col1 = $("<td>");              //create a new table cell/column for product
            col1.html(`${sale.product}`);       //set inner html content to sale.product from the current sale object
            row.append(col1);                    //append the cell to the row

            const col2 = $("<td>");              //create a new table cell/column for quantity
            col2.html(`${sale.quantity}`);      //set inner html content to sale.quantity from the current sale object
            row.append(col2);                    //append the cell to the row
            
            const col3 = $("<td>");              //create a new table cell for revenue
            col3.html(`${sale.revenue}`);       //set inner html content to sale.revenue from the current sale object
            row.append(col3);                    //append the cell to the row

            salesTable.append(row);                //append the row to the sales table body
        })
    }
    setSalTable();         //call the function to create and set the sales table (g)

    
    
    var activityList = $("#activity-list");  //creates jquery object to get element by id="activity-list"
    function loadActivites(){               //function to add activities to the activity list
        activities.forEach(activity => {        //loops through all activities in the activities array/list
            const listActivity = $("<li>");              //create a new list item for the activity
            listActivity.html(`${activity.message}`);       //set inner html content to activity.message from the current activity object
            activityList.append(listActivity);              //append the list item to the activity list
        });
    }
    loadActivites();         //call the function to load the activities (h)

    
    
    var customerTable = $("#customerTableBody");  //creates jquery object to get element by id="customerTableBody"
    function setCustomerTable(){                    //function to populate the customer table
        customers.forEach( customer => {            //for all customers in the customers array/list
            const row = $("<tr>");                //create a new table row
            
            const col1 = $("<td>");              //create a new table cell/column for name
            col1.html(`${customer.name}`);       //set inner html content to customer.name from the current customer object
            row.append(col1);                    //append the cell to the row

            const col2 = $("<td>");              //create a new table cell/column for email
            col2.html(`${customer.email}`);      //set inner html content to customer.email from the current customer object
            row.append(col2);                    //append the cell to the row
            
            const col3 = $("<td>");              //create a new table cell for status 
            // col3.html(`${customer.status}`);       
            if(customer.status === "Active"){  //set inner html content to customer.status from the current customer object and apply active status styling depending on the status
                col3.html(`<span class="status status-active">${customer.status}</span>`); 
            }
            else{
                col3.html(`<span class="status status-pending">${customer.status}</span>`); 
            }
            row.append(col3);                    //append the cell to the row
            
            const col4 = $("<td>");              //create a new table cell for joined
            col4.html(`${customer.joined}`);       //set inner html content to customer.joined from the current customer object
            row.append(col4);                    //append the cell to the row

            customerTable.append(row);                //append the row to the customer table body
        })
    }
    setCustomerTable();         //call the function to create and set the customer table (i)



    var statusList = $("#system-status-list");  //creates jquery object to get element by id="system-status-list"
    function loadStatus(){                      //function to load system status messages into the list
        messages.forEach(message => {
            const listMessage = $("<li>");              //create a new list item for the activity
            listMessage.html(`${message.messsage}`);       //set inner html content to message.messsage from the current message object
            statusList.append(listMessage);              //append the list item to the system status list
        });
    }
    loadStatus();         //call the function to load the system status (j)



    var notiList = $("#notifications-list");  //creates jquery object to get element by id="notifications-list"
    function loadNoti(){                        //function to load notifications into the list
        notifications.forEach(notification => {
            const listNoti = $("<li>");              //create a new list item for the activity
            listNoti.html(`${notification.messsage}`);       //set inner html content to notification.messsage from the current notification object
            notiList.append(listNoti);              //append the list item to the notifications list
        });
    }
    loadNoti();         //call the function to load the notifications (k)



    const notiNum = $("#notification-num");   //creates jquery object to get element by id="notification-num"
    notiNum.html(notifAmt);           //sets inner html content to js object notifAmt above (l)

    

    var taskList = $("#tasks-list");  //creates jquery object to get element by id="tasks-list"
    function loadTasks(){                        //function to load tasks into the list
        tasks.forEach(task => {
            const listTask = $("<li>");              //create a new list item for the activity
            listTask.html(`${task.messsage}`);       //set inner html content to task.messsage from the current task object
            taskList.append(listTask);              //append the list item to the tasks list
        });
    }
    loadTasks();         //call the function to load the tasks (m)

//--------------------------------------------------------------------------------------------------------------------
//4.

    $("button").button(); //(a) Initialize all buttons as jQuery UI buttons

    $("#dashboardTabs").tabs(); //(b) Initialize the dashboard tabs as jQuery UI tabs

    //(c) Initialize the customer dialogue as a jQuery UI dialog with specific properties
    $("#customerDialog").dialog({     
        autoOpen: false,
        modal: true,
        width: 450,
        buttons: {  
            "Create Customer": function () {
            var name = $("#customerName").val();
            var email = $("#customerEmail").val();
            if (!name || !email) {
                alert("Please enter a name and email.");
                return;
            }
            alert("Customer created: " + name);
            $(this).dialog("close");
            },

            "Cancel": function () {
                $(this).dialog("close");
                }
        }           

    }); 

    //(d) Initialize the accordion as a jQuery UI accordion with specific properties
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });

    //(e) Open the customer dialog when the new customer button is clicked
    $("#newCustomerButton").on("click", function() {
        $("#customerDialog").dialog("open");
    });

    $("#customerDate").datepicker();      //(f) Initialize the customer date input as a jQuery UI datepicker

    });