angular.module('starter').factory("$Cache", function(){
  return {
    body: { auth: false, data: [] },

    load: function(){
      try
      {
        this.body = JSON.parse(localStorage.cache)
      }
      catch(e)
      {
        this.body = { auth: false, data: [] }
      }
    },

    save: function(newVal){
      this.body.data = newVal
      localStorage.cache = JSON.stringify(this.body)
      return this.get()
    },

    saveAuth: function(newVal){
      this.body.auth = newVal
      localStorage.cache = JSON.stringify(this.body)
      return this.get()
    },

    get: function(){
      this.load()
      return this.body
    },

    find: function(id){
      var response = null
      this.get().data.forEach(function(row){
        if(row.id == id)
          response = row
        return true
      })
      return response
    },

    clear: function(){
      this.save({auth: false, data: []})
    }
  }
})
