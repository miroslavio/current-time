const timezoneBtn = document.getElementById('timezone-btn');
const timezoneSel = document.getElementById('timezone-sel');
const applyBtn = document.querySelector('.modal__btn-primary');
let selectedTimezone = dayjs.tz.guess();

MicroModal.init();

function generateTimezones() {
  const timezones = Intl.supportedValuesOf('timeZone');
  timezones.forEach(timezone => {
    const option = document.createElement('option');
    option.value = timezone;
    option.textContent = timezone;
    timezoneSel.appendChild(option);
  });
}

function updateTime() {
  const now = dayjs().tz(selectedTimezone);
  
  document.getElementById('current-timezone').textContent = selectedTimezone;
  
  const time = now.format('HH:mm:ss');
  document.getElementById('current-time').textContent = time;
  
  const date = now.format('dddd, D MMMM, YYYY');
  document.getElementById('current-date').textContent = date;
}

applyBtn.addEventListener("click", () => {
  const selectedOption = timezoneSel.value;
  if (selectedOption) {
    selectedTimezone = selectedOption;
    updateTime();
  }
});

setInterval(updateTime, 1000);

// Initial call to display the time immediately
updateTime();

generateTimezones();