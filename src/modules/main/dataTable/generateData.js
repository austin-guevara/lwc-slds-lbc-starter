// seeded PRNG function
function mulberry32(a) {
    return function () {
        let t = (a += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
const getRandom = mulberry32(12345); // insert seed

export default function generateData({ amountOfRecords }) {
    return [...Array(amountOfRecords)].map((_, index) => {
        return {
            name: `Name (${index})`,
            website: 'www.salesforce.com',
            amount: Math.floor(getRandom() * 100),
            phone: `${Math.floor(getRandom() * 9000000000) + 1000000000}`,
            closeAt: new Date(
                Date.now() + 86400000 * Math.ceil(getRandom() * 20)
            ),
        };
    });
}
