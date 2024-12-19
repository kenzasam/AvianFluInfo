---
layout: datavis
title: FAQ
script: assets/USFarmInfo.js
---

## Information for Farm Workers

If you work with dairy cows suspected or confirmed to have avian flu and you start to feel sick, please contact your local public health department.

Report dead or sick birds or animals to the USDA toll-free at 1-866-536-7593, or get in touch with your local state agriculture department. You can find more info on the map below, and you can find you state Vet [here](https://www.aphis.usda.gov/contact/animal-health?filter=report%20sick%20or%20dead%20livestock%2C%20aquatics%2C%20or%20poultry).


The USDA can help producers with:

* PPE and/or laundering
* Biosecurity planning and implementation
* Heat treatment for waste milk
* Veterinarian costs
* Shipping costs for samples

United States, General Updates for Farm Workers

* December 6, 2024: USDA has implemented testing requirements for raw (unpasteurized) milk intended for pasteurization and reporting requirements for HPAI positive milk [here](https://www.aphis.usda.gov/sites/default/files/20241205-federal-order-final.pdf)
* April 24, 2024: USDA has implemented testing requirements for the interstate movement of lactating dairy cattle in an effort to contain the spread of disease.  The order can be found on USDA’s website [here](https://www.aphis.usda.gov/sites/default/files/dairy-federal-order.pdf)
*The USDA provides financial assistance for milk testing, PPE, offset for milk loss, and other biosecurity measures. Apply [here](https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza/hpai-detections/livestock/financial-assistance).  
* Free biosecurity kit are available for dairy farms: 
** (https://www.centerfordairyexcellence.org/request-an-everyday-biosecurity-kit/)
** Signs, training videos, cleaning guides, in Spanish and English, [here](https://securemilksupply.org/training-materials/biosecurity/)
* There is free technical support available to improve your farms cybersecurity and operational systems. Please contact ISAC [here](https://www.isac.bio/post/update-hpai-h5n1-avian-influenza-2024)

<div id="container1" style="width: 100%; height: 500px;"></div>
<div id="container2"></div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        initializeMap('container1', 'container2');
    });
</script>