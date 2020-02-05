(function(global, factory) {
	function $(selector) {
		if (!selector) return "No Selector";

		function Jquery() {
			this.elems = factory.querySelectorAll(selector);

			this.removeClass = function(classes) {
				var arrayClasses = classes.split(" ");

				this.elems.forEach(function(elem) {
					var elemClasses = elem.getAttribute("class");
					var arrayElemClasses = elemClasses.split(" ");
					var elemClassesRemove = arrayElemClasses.filter(function(elemClass) {
						if (!arrayClasses[1]) return elemClass !== arrayClasses[0];

						var remove = true;

						arrayClasses.find(function(classToRemove, i) {
							if (classToRemove === elemClass) {
								remove = false;

								arrayClasses.splice(i, 1);

								return true;
							}
						});

						return remove;
					});

					var newClasses = "";

					for (var i = 0; i < elemClassesRemove.length; i++) {
						if (i === elemClassesRemove.length - 1) {
							newClasses = newClasses + elemClassesRemove[i];
							break;
						}

						newClasses = newClasses + elemClassesRemove[i] + " ";
					}

					elem.setAttribute("class", newClasses);
				});

				return this;
			};

			this.addClass = function() {};
		}

		return new Jquery();
	}

	$("#test").removeClass("hey");
})(window, document);
