let shouldLog = true;

let OVERRIDE_OPTIONS =
{
	COUNTRY_ONLY: "countryOnlyRadioButton",
	CONTINENT_ONLY: "regionOnlyRadioButton",
	CONTINENTAL_REGION_ONLY: "continentalRegionOnlyRadioButton",
	DISABLE:  "disableRadioButton"
};

let SORT_OVERRIDE_OPTIONS =
{
	CHEAPEST_WITH_DELIVERY_ONLY: "sortOrderCheapestIncludingDeliveryRadioButton",
	NEWEST_FIRST: "sortOrderNewRadioButton",
	BEST_RESULTS: "sortOrderBestResultsRadioButton",
	DISABLE:  "sortOrderDisableRadioButton"
};

let STORAGE_KEYS =
{
	OVERRIDE_OPTION: "overrideOption",
	SORT_OVERRIDE_OPTION: "sortOverrideOption"
};

let defaultOverride = OVERRIDE_OPTIONS.COUNTRY_ONLY;
let defaultSortOverride = SORT_OVERRIDE_OPTIONS.CHEAPEST_WITH_DELIVERY_ONLY;

let MESSAGE_TYPES =
{
	DEBUG: 0,
	WARN:  1,
	ERROR: 2
};

let URL_TYPES =
{
	NOT_EBAY:    0,
	EBAY:        1,
	EBAY_SEARCH: 2,
	EBAY_BROWSE: 3
};

let EBAY_URL_IDENTIFIER = "www.ebay.";
let EBAY_SEARCH_IDENTIFIER = "/sch/";
let EBAY_BROWSE_IDENTIFIER = "/bn_";
let EBAY_LOCATION_IDENTIFIER = "LH_PrefLoc";
let EBAY_SORT_IDENTIFIER = "_sop"; // 16
let COUNTRY_LOCATION_VALUE = "1";
let CONTINENT_LOCATION_VALUE = "3";
let CONTINENT_REGION_LOCATION_VALUE = "6";
let SORT_BEST_RESULTS_VALUE = "12";
let SORT_WITH_DEVLIVERY_DESCENDING_VALUE = "15";
let SORT_NEW_VALUE = "10";
let SORT_ENDING_SOON_VALUE = "1";
let SEARCH_SECONDARY_DELIMITER = "&";
let SEARCH_EQUAL_DELIMITER = "=";
let SEARCH_ADVANCED_EQUAL_DELIMITER = "%";
let SEARCH_PRIMARY_DELIMITER = "?";