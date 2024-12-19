---
layout: datavis
title: FAQ
script: assets/USFarmInfo.js
---

## Information for Farm Workers

If you work with dairy cows suspected or confirmed to have avian flu and you start to feel sick, please contact your local public health department and find more info in the FAQ.

If you see sick or dead animals, get in touch with your local state agriculture department. Find you state Vet [here](https://www.aphis.usda.gov/contact/animal-health?filter=report%20sick%20or%20dead%20livestock%2C%20aquatics%2C%20or%20poultry).

United States, General

* The USDA provides financial assistance for milk testing, PPE, offset for milk loss, and other biosecurity measures. Apply [here](https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza/hpai-detections/livestock/financial-assistance).  
* A free biosecurity kit is available for dairy farms: https://www.centerfordairyexcellence.org/request-an-everyday-biosecurity-kit/  
* There is free support available to improve your farms cybersecurity and operational systems. Please contact ISAC : https://www.isac.bio/post/update-hpai-h5n1-avian-influenza-2024

<div id="container1" style="width: 100%; height: 500px;"></div>
<div id="container2"></div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        initializeMap('container1', 'container2');
    });
</script>