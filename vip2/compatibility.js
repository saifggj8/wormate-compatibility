// التأكد من توافق الجهاز
function checkCompatibility() {
    const userAgent = navigator.userAgent;
    const isCompatible = userAgent.includes("Chrome") || userAgent.includes("Firefox") || userAgent.includes("Safari");

    // عرض النتيجة في الصفحة
    const compatibilityElement = document.getElementById("compatibility");
    if (isCompatible) {
        compatibilityElement.textContent = "الجهاز متوافق مع لعبة Wormate.io 🎉";
        compatibilityElement.style.color = "green";
    } else {
        compatibilityElement.textContent = "الجهاز غير متوافق مع لعبة Wormate.io ❌";
        compatibilityElement.style.color = "red";
    }
}

// تنفيذ الفحص عند تحميل الصفحة
checkCompatibility();
