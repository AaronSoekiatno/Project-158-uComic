AFRAME.registerComponent("comics-posters", {
    init: function() {
      this.postersContainer = this.el;
      this.posters();
    },
  
    posters: function() {
      const postersList = [
        {
          id: "batman",
          url: "batman.jpg"
        },
        {
          id: "flash",
          url: "flash.jpg"
        },
  
        {
          id: "superman",
          url: "superman.jpg"
        },
        {
          id: "xmen",
          url: "xmen.webp"
        }
      ];
      let previousXPosition = -75;
  
      for (var item of postersList) {
        const posX = previousXPosition + 30;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        previousXPosition = posX;
  

        const borderEl = this.createBorder(position, item.id);
  
        const poster = this.createPoster(item);
        borderEl.appendChild(poster);
  
        this.postersContainer.appendChild(borderEl);
      }
    },

    createBorder: function(position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 22,
        height: 40
      });
  
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", { color: "#fff" });
      entityEl.setAttribute("cursor-listener", {});
      return entityEl;
    },

    createPoster: function(item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 20,
        height: 28
      });
  
      entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
      entityEl.setAttribute("material", { src: item.url });
  
      return entityEl;
    }
  });