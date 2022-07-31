export default function showLifeBar(user) {
	if (user.health >= 50) {
		return 'healthy';
	}

	if (user.health >= 15 && user.health < 50) {
		return 'wounded';
	}

	return 'critical';
}
