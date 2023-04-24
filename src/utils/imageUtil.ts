export const getLogo = (name: string) => {
	return new URL(`../assets/logo/${name}`, import.meta.url).href;
};

export const getUrl = (name: string) => {
	return new URL(`../assets/${name}`, import.meta.url).href;
};
