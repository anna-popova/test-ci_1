import showLifeBar from '../life';

test.each([
	['user1 - health: 1346', { name: 'Маг', health: 1348 }, 'healthy'],
	['user2 - health: 50', { name: 'Воин', health: 50 }, 'healthy'],
	['user3 - health: 49', { name: 'Лучник', health: 49 }, 'wounded'],
	['user4 - health: 15', { name: 'Асасин', health: 15 }, 'wounded'],
	['user5 - health: 1', { name: 'Мертвец', health: 1 }, 'critical'],
])('testing showLifeBar function for %s user with %i health', (_, user, expected) => {
	const result = showLifeBar(user);
	expect(result).toBe(expected);
});

//!разбивка test.each() на отдельные составляющие
// const dataList = [
// 	['user1 - health: 1346', {name: 'Маг', health: 1348}, 'healthy'],
// 	['user2 - health: 50', {name: 'Воин', health: 50}, 'healthy'],
// 	['user3 - health: 49', {name: 'Лучник', health: 49}, 'wounded'],
// 	['user4 - health: 15', {name: 'Асасин', health: 15}, 'wounded'],
// 	['user5 - health: 1', {name: 'Мертвец', health: 1}, 'critical'],
// ];

// const handler = test.each(dataList);

// handler('testing showLifeBar function for %s user with %i health', (_, user, expected) => {
// 	const result = showLifeBar(user);
// 	expect(result).toBe(expected);
// });

//!отдельный тест на каждое значение
// test('life test for user1', () => {
// 	const user1 = {name: 'Маг', health: 1348};
// 	const result =  showLifeBar(user1);
// 	expect(result).toBe('healthy');
// });

// test('life test for user2', () => {
// 	const user2 = {name: 'Воин', health: 50};
// 	const result =  showLifeBar(user2);
// 	expect(result).toBe('healthy');
// });

// test('life test for user3', () => {
// 	const user3 = {name: 'Лучник', health: 49};
// 	const result =  showLifeBar(user3);
// 	expect(result).toBe('wounded');
// });

// test('life test for user4', () => {
// 	const user4 = {name: 'Асасин', health: 15};
// 	const result =  showLifeBar(user4);
// 	expect(result).toBe('wounded');
// });

// test('life test for user5', () => {
// 	const user5 = {name: 'Мертвец', health: 1};
// 	const result =  showLifeBar(user5);
// 	expect(result).toBe('critical');
// });
