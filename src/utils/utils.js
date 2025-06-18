export const formatDate = data => {
  const date = new Date(data);
  const formattedDate =
    date.getDate() + ' ' + date.toLocaleString('en-us', {month: 'short'});
  return formattedDate;
};

export function getCurrentMonthDays() {
  const now = new Date(); // Get current date
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // getMonth() is 0-based, so add 1
  return new Date(year, month, 0).getDate(); // Get last day of the current month
}
export function getPreviousMonthDays() {
  const now = new Date(); // Get current date
  const year = now.getFullYear();
  const month = now.getMonth(); // getMonth() is 0-based, so add 1
  return new Date(year, month, 0).getDate(); // Get last day of the current month
}

export function dailyBudget(balanceAmount) {
  const today = new Date();
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const noOfDays = lastDayOfMonth.getDate() - today.getDate()
  if(noOfDays===0)
    return balanceAmount
  else
    return balanceAmount/noOfDays
}
export function weeklyBudget(amount) {
  const today = new Date();
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const noOfDays = lastDayOfMonth.getDate() - today.getDate()
  const noOfWeeks = Math.ceil(noOfDays===0?1:noOfDays/7)
  return (amount/noOfWeeks);
}
