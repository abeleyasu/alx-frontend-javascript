export default function loadBalancer(chinaDownload, USDownload) {
  // Use Promise.race to return the first resolved promise
  return Promise.race([chinaDownload, USDownload]);
}
