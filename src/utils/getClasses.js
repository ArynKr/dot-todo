/**
 * Return the list of classes back as string
 *
 * Ex:  classes = ["red", "bold", "pb-4", "bg-white"]
 *      getClasses(classes) -> will return
 *      result = "red bold pb-4 bg-white"
 */
export const getClasses = (classList) =>
	classList
		.filter((item) => item !== '')
		.join(' ')
		.trim();

/**
 * // Test
 * console.log(getClasses(['red', 'bold', 'pb-4', 'bg-white']).length);
 */
