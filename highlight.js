AFRAME.registerComponent("cursor-listener", {
schema:{
    selectedItemId: { default: "", type: "string" },
},

init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },

  handleMouseEnterEvents: function () {
    this.el.addEventListener("mouseenter", () => {
      const id = this.el.getAttribute("id");
      const postersId = [
        "batman",
        "flash",
        "superman",
        "xmen", 
      ];
      console.log(id)
      if (postersId.includes(id)) {
        
        const postersContainer = document.querySelector("#posters-container");
        postersContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", { color: "orange" });
      }
    });
  },

    handleMouseLeaveEvents: function(){
        this.el.addEventListener("mouseleave", () => {
            const { selectedItemId } = this.data;

            if (selectedItemId) {
                
              const el = document.querySelector(`#${selectedItemId}`);
              const id = el.getAttribute("id");
              if (id == selectedItemId) {
                el.setAttribute("material", {
                  color: "white",
                });
              }
            }
          });
    }
})
