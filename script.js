function checkLink() {
  const url = document.getElementById("urlInput").value.trim();
  const result = document.getElementById("result");
  const tip = document.getElementById("tip");

  if (!url) {
    result.innerText = "⚠️ Please enter a URL.";
    tip.innerText = "";
    return;
  }

  // Basic red flags for phishing
  const suspiciousPatterns = [
    "bit.ly", "tinyurl", "free", "login", "verify", "secure", "account", "paypal", "@", "http://", "ip address"
  ];

  let isSuspicious = suspiciousPatterns.some(pattern =>
    url.toLowerCase().includes(pattern)
  );

  if (isSuspicious) {
    result.innerText = "🚨 This link may be suspicious or phishing!";
    tip.innerText = "Avoid clicking such links or sharing sensitive info.";
    result.style.color = "#d9534f";
  } else {
    result.innerText = "✅ This link looks safe (but always stay cautious)";
    tip.innerText = "Always double-check the source.";
    result.style.color = "#28a745";
  }
}
