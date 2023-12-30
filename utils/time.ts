export const convertTimeToLocalTime = (time: string) => {
  const currentDate = new Date()
  const t = new Date(`${currentDate.getFullYear()} ${currentDate.getMonth()} ${currentDate.getDate()} ${time} GMT+0300`).toTimeString()
  return t
}

export const convertDateToLocaleDate = (dateQatar: string) => {
  const currentDate = new Date()
  const t = new Date(`${currentDate.getFullYear()} ${dateQatar} GMT+0300`)
  return t
}
