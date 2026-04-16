const disasterData = {
    earthquake: {
        title: "Earthquake Safety Protocols",
        before: ["Identify safe spots in each room.", "Secure heavy furniture to walls.", "Prepare an emergency kit."],
        during: ["Drop, Cover, and Hold on.", "Stay away from windows and glass.", "If outside, stay in open areas."],
        after: ["Check for injuries.", "Expect aftershocks.", "Turn off gas if you smell a leak."]
    },
    flood: {
        title: "Flood Safety Protocols",
        before: ["Know your evacuation routes.", "Move valuables to higher ground.", "Keep sandbags ready."],
        during: ["Avoid walking/driving in water.", "Move to high ground immediately.", "Turn off electricity."],
        after: ["Avoid floodwaters (contamination risk).", "Wash everything that got wet.", "Check for structural damage."]
    },
    fire: {
        title: "Fire Safety Protocols",
        before: ["Install smoke alarms.", "Practice an escape plan twice a year.", "Check electrical cords."],
        during: ["Stay low under smoke.", "Feel doors for heat before opening.", "If clothes catch fire: Stop, Drop, Roll."],
        after: ["Don't re-enter until safe.", "Check for smoke damage.", "Discard exposed food/medicine."]
    },
    cyclone: {
        title: "Cyclone Safety Protocols",
        before: ["Board up glass windows.", "Trim tree branches near the house.", "Store loose items indoors."],
        during: ["Stay indoors away from windows.", "Switch off gas and power.", "Stay in the strongest part of the house."],
        after: ["Wait for official 'All Clear'.", "Watch for fallen power lines.", "Clear debris safely with gloves."]
    }
};

function openSafetyModal() {
    document.getElementById('safetyModal').style.display = 'block';
    showMenu();
}

function closeModal() {
    document.getElementById('safetyModal').style.display = 'none';
}

function showMenu() {
    document.getElementById('selectionMenu').style.display = 'block';
    document.getElementById('tipsDetail').style.display = 'none';
}

function showDisasterTips(type) {
    const data = disasterData[type];
    document.getElementById('modalTitle').innerText = data.title;
    
    // Target the specific IDs from your HTML
    fillList('listBefore', data.before);
    fillList('listDuring', data.during);
    fillList('listAfter', data.after);

    document.getElementById('selectionMenu').style.display = 'none';
    document.getElementById('tipsDetail').style.display = 'block';
}

function fillList(id, items) {
    const list = document.getElementById(id);
    list.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}

// Close modal if user clicks outside content
window.onclick = function(event) {
    let modal = document.getElementById('safetyModal');
    if (event.target == modal) {
        closeModal();
    }
}