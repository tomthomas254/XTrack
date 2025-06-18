export const EXPENSECATAGORIES = {
    data: [
        { id: '1', name: 'Rent' },
        { id: '2', name: 'Food' },
        { id: '3', name: 'Shopping' },
        { id: '4', name: 'Bills' },
        { id: '5', name: 'Home' },
        { id: '6', name: 'Vehicle' },
        { id: '7', name: 'Farm & Automation' },
        { id: '8', name: 'Salary' },
        { id: '9', name: 'Others' }
    ]
}
export const INCOMECATAGORIES = {
    data: [
        { id: '1', name: 'Salary' },
        { id: '2', name: 'Others' }
    ]
}

export const EXPENSES = {
    data: [
        { id: '1', date: '2024-12-30', amount: 100, description: '', catagory_id: '2' , title:'Expense1'},
        { id: '2', date: '2024-12-30', amount: 1500, description: '', catagory_id: '3' , title:'Expense2'},
        { id: '3', date: '2024-12-31', amount: 1000, description: '', catagory_id: '4' , title:'Expense3'},
        { id: '4', date: '2025-01-01', amount: 500, description: '', catagory_id: '3' , title:'Expense4'},
        { id: '5', date: '2025-01-01', amount: 1010, description: '', catagory_id: '2', title:'Expense5' },
    ]
}

export const INCOME = {
    data: [
        {
            date: '2025-01-01', amount: 32943, description: 'Salary', catagory_id: 1
        },
        {
            date: '2025-01-01', amount: 1500, description: 'Salary', catagory_id: 2
        },
    ]
}

export const BUDGET = {
    data:[
        {id:'1', catagory_id:'1',amount:3500,balance:2500},
        {id:'2', catagory_id:'2',amount:8000,balance:4500},
        {id:'3', catagory_id:'3',amount:3600,balance:600},
        {id:'4', catagory_id:'4',amount:3000,balance:2500},
        {id:'5', catagory_id:'5',amount:2000,balance:-500},
        {id:'6', catagory_id:'6',amount:2000,balance:500},
    ]
}

export const HABITCATAGORY ={
    data:[
        {id:1, title:'Book Reading', desc:'Read books daily'},
        {id:2, title:'savings', desc:'save Rs.24 daily'},
    ]
}

export const HABIT ={
    data1:[
        {id:'1',date:'2025-02-01',selected:1,catagory_id:'1'},
        {id:'2',date:'2025-02-03',selected:1,catagory_id:'1'},
        {id:'3',date:'2025-02-04',selected:1,catagory_id:'1'},
        {id:'4',date:'2025-02-06',selected:1,catagory_id:'1'},
        {id:'5',date:'2025-02-08',selected:1,catagory_id:'1'},
        {id:'7',date:'2025-02-13',selected:1,catagory_id:'1'},
        {id:'8',date:'2025-02-24',selected:1,catagory_id:'1'},
        {id:'9',date:'2025-02-25',selected:1,catagory_id:'1'},
        {id:'10',date:'2025-02-26',selected:1,catagory_id:'1'},
        {id:'11',date:'2025-02-28',selected:1,catagory_id:'1'},
    ],
    data2:[
        {id:'1',date:'2025-02-1',selected:1,catagory_id:'2'},
        {id:'2',date:'2025-02-2',selected:1,catagory_id:'2'},
        {id:'3',date:'2025-02-4',selected:0,catagory_id:'2'},
        {id:'4',date:'2025-02-8',selected:1,catagory_id:'2'},
        {id:'5',date:'2025-02-14',selected:0,catagory_id:'2'},
        {id:'6',date:'2025-02-25',selected:1,catagory_id:'2'},
    ]
}