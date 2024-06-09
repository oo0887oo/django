$(document).ready(function() {
    // Function to update time every second

    $(document).ready(function() {
        // Function to update the time every second
        function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const timeString = `${hours}:${minutes}:${seconds}`;
            $('#clock').text(timeString);
        }
    
        // Initial call
        updateClock();
        // Update clock every second
        setInterval(updateClock, 1000);
    });
    
    // Function to fetch weather data
    function updateWeather() {
        const apiKey = 'CWA-496DC2AD-1372-467C-B685-427FB1925230';  // 使用提供的API密钥
        const apiUrl = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${apiKey}&locationName=臺中市`;

        $.getJSON(apiUrl, function(data) {
            const locationData = data.records.location[0];
            const weatherElement = locationData.weatherElement;
            const temperature = weatherElement[2].time[0].parameter.parameterName; // 温度
            const weatherDescription = weatherElement[0].time[0].parameter.parameterName; // 天气描述

            $('#weather').text(`當前天氣: ${temperature}°C, ${weatherDescription}`);
        }).fail(function() {
            $('#weather').text('無法獲取天氣信息');
        });
    }

    // Update time every second
    setInterval(updateTime, 1000);
    // Update weather every 10 minutes
    updateWeather();
    setInterval(updateWeather, 600000);

    // Initial call
    updateTime();
    updateWeather();
});
