const notifyPonnectConfig = { serverId: 6217, active: true };

const notifyPonnectHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6217() {
    return notifyPonnectConfig.active ? "OK" : "ERR";
}

console.log("Module notifyPonnect loaded successfully.");