export function getBirthdayState(data) {
    const today = new Date();

    const currentYear = today.getFullYear();

    const start = new Date(
        currentYear,
        data.wishStart.month - 1,
        data.wishStart.day,
        0,
        0,
        0
    );

    const end = new Date(
        currentYear,
        data.wishEnd.month - 1,
        data.wishEnd.day,
        23,
        59,
        59
    );

    let nextBirthday = new Date(
        currentYear,
        data.wishStart.month - 1,
        data.wishStart.day
    );

    if (today > end) {
        nextBirthday = new Date(
            currentYear + 1,
            data.wishStart.month - 1,
            data.wishStart.day
        );
    }

    const isBirthday =
        today.getTime() >= start.getTime() &&
        today.getTime() <= end.getTime();

    return {
        isBirthday,
        nextBirthday: nextBirthday.getTime(),
    };
}

export function getRemainingTime(target) {
    const diff = target - new Date();

    if (diff <= 0)
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}