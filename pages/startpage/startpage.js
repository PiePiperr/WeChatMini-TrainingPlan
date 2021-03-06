Page({
  data: {
    item: '',
    IndustryList: [{
        id: 1,
        name: '医疗健康',
        check: ''
      },
      {
        id: 2,
        name: '工具软件',
        check: ''
      },
      {
        id: 3,
        name: '企业服务',
        check: ''
      },
      {
        id: 4,
        name: '汽车交通',
        check: ''
      },
      {
        id: 5,
        name: '硬件',
        check: ''
      },
      {
        id: 6,
        name: '教育',
        check: ''
      },
      {
        id: 7,
        name: '文化娱乐',
        check: ''
      },
      {
        id: 8,
        name: '金融',
        check: ''
      },
      {
        id: 9,
        name: '体育运动',
        check: ''
      },
      {
        id: 10,
        name: '物流',
        check: ''
      },
      {
        id: 11,
        name: '本地生活',
        check: ''
      },
      {
        id: 12,
        name: '旅游',
        check: ''
      },
      {
        id: 13,
        name: '房产服务',
        check: ''
      },
      {
        id: 14,
        name: '广告营销',
        check: ''
      },
      {
        id: 15,
        name: '游戏',
        check: ''
      },
      {
        id: 16,
        name: '社交网络',
        check: ''
      },
      {
        id: 17,
        name: '农业',
        check: ''
      }, {
        id: 18,
        name: '电子商务',
        check: ''
      }
    ]
  },

  onLoad: function() {
    if (wx.getStorageSync('MyIndustry').length > 0) {
      wx.switchTab({
        url: '../chollima/list/chollima_list',
      })
    }
  },

  check: function(e) {
    console.log(e)
    let that = this
    let a = 'IndustryList[' + e.currentTarget.dataset.index + '].check'
    let b = e.currentTarget.dataset.data.check == 0 ? 1 : 0;
    that.setData({
      [a]: b
    })
  },

  checkall: function(e) {
    let that = this
    for (let i = 0; i < that.data.IndustryList.length; i++) {
      that.data.IndustryList[i].check = 1
    }
    that.setData({
      IndustryList: that.data.IndustryList
    })
  },

  skip: function(e) {
    wx.switchTab({
      url: '../chollima/list/chollima_list',
    })
  },

  save: function(e) {
    let that = this
    let CheckedIndustry = new Array()
    for (let i = 0; i < that.data.IndustryList.length; i++) {
      if (that.data.IndustryList[i].check == 1) {
        CheckedIndustry.push({
          id: that.data.IndustryList[i].id,
          name: that.data.IndustryList[i].name
        })
      }
    }
    wx.setStorage({
      key: 'MyIndustry',
      data: CheckedIndustry
    })
    wx.switchTab({
      url: '../chollima/list/chollima_list'
    })
  },
})