var hw = document.getElementById('hw');
hw.addEventListener('click', function () {
  alert('Hello world');
})

var chart = bb.generate({
    title: {
    text: "목표: 1800Kcal 먹기"
    },
    size:{
        height: 500,
        width: 1000,
    },
    bindto: "#chart",
    data: {
        type: "line",
        columns: [
            ["기록", 2800, 2500, 1100, 1450, 1800, 1300, 1950],
            ["목표", 1800, 1800, 1800, 1800, 1800, 1800, 1800]
        ],

        colors:{
        "기록": "#56A4FF",
        "목표":"#03C52E"
        },
    },
        axis: {
                        x: {
                          type: "category",
                          categories: [
                            "9/22",
                            "9/23",
                            "9/24",
                            "9/25",
                            "9/26",
                            "9/27",
                            "9/28",
                          ]
                        }
                      },

});
