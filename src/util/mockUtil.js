let mockUtil = {
  genReturn: function (success, data) {
    return {
      success: !!success,
      data: data
    }
  }
}

export default mockUtil
