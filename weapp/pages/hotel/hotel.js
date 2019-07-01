var hotelData = require("../../data/hotelList.js");
var tourData = require("../../data/tourList.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showJsonList: "",
    type:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置标题
    if (options.title) {
      wx.setNavigationBarTitle({
        title: options.title
      });
    }
    switch (parseInt(this.options.id)){
      case 1: this.setData({
        showJsonList: hotelData.jsonList,
        type: hotelData.type
      });break;
      case 2: this.setData({
        showJsonList: tourData.jsonList,
        type: tourData.type
      }); break;
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})