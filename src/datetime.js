
function getUkDateFromDbDateTime($input) {
	// "2016-04-08 21:11:59" to UK date
	if ($input == "" || $input == null) {
		return "no input";
	}
	var $DateTime = $input.split(" ");
	var $DateParts = $DateTime[0].split("-");
	var $UKDate = $DateParts[2] + "/" + $DateParts[1] + "/" + $DateParts[0];
	return $UKDate;
}

function getUkDateTimeFromDbDateTime($input) {
	// "2016-04-08 21:11:59" to UK date time
	var $DateTime = $input.split(" ");
	var $DateParts = $DateTime[0].split("-");
	var $TimeParts = $DateTime[1].split(":");
	var $UKDate = $DateParts[2] + "/" + $DateParts[1] + "/" + $DateParts[0];
	var $Time = $TimeParts[0] + ":" + $TimeParts[1];
	return ($UKDate + " " + $Time);
}

