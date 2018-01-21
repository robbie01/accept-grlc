var evts = new EventSource("/check-payment?address=" + address);
evts.onmessage = function(evt) {
  document.getElementById("status").innerText = evt.data;
}
