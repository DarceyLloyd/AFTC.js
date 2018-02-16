<?php
/**
 * Author: Darcey@AllForTheCode.co.uk
 * Date: 20/03/2016
 */

namespace AFTC\Framework\App\Controllers\UserRegister;

use AFTC\Framework\App\Libraries\DirectoryLibrary;
use AFTC\Framework\App\Libraries\SecurityLibrary;
use AFTC\Framework\App\Libraries\SessionLibrary;
use AFTC\Framework\App\Libraries\UserPageOutputLibrary;
use AFTC\Framework\App\Models\RegisterModel;
use AFTC\Framework\App\Models\UserModel;
use AFTC\Framework\App\Variables;
use AFTC\Framework\Config;
use AFTC\Framework\Utilities;

class Register extends UserPageOutputLibrary
{

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	private $model;
	private $result;

	private $dirlib;

	private $first_name;
	private $last_name;
	private $town;
	private $country;
	private $email;
	private $password;
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	public function __construct()
	{
		$this->security = new SecurityLibrary("public");

		if ($this->security->isPostbackCodeValid()) {
			//$this->registerNewUser();
			echo("<b>Everything has been recorded, IP, Geo and all headers... Welcome to the log.</b>");
			die();
		} else {
			$this->data = [
				"browser_title" => "User registration",
				"meta_description" => "All For The Code user registration.",
				"css_includes" => [
					"aftc/user/register.css",
				],
				"js_includes" => [
					"aftc/user/register.js",
				],
				"view" => "UserRegister/Register.php",
			];

			$this->generatePage();
		}
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	public function registerNewUser()
	{
		$this->first_name = Utilities::getCleanPost("first_name");
		$this->last_name = Utilities::getCleanPost("last_name");
		$this->town = Utilities::getCleanPost("town");
		$this->country = Utilities::getCleanPost("country");
		$this->email = strtolower(Utilities::getCleanPost("email"));
		$this->password = Utilities::getCleanPost("password");

		$this->model = new RegisterModel();
		$email_used = $this->model->hasEmailAlreadyBeenUsed($this->email);
		//vd($email_used);

		if ($email_used){
			$this->showError("The email address you are trying to register with has already been used. Only 1 account is allowed per an email.");
			return;
		}

		// Get encrypted password as well as salt1 and salt2, for storage in the DB
		$secure_data = $this->security->createPassword($this->password);
		//vd($secure_data);

		// Register the new user
		$params = array(
			"first_name" => $this->first_name,
			"last_name" => $this->last_name,
			"town" => $this->town,
			"country" => $this->country,
			"email" => $this->email,
			"password" => $secure_data["hash"],
			"salt1" => $secure_data["salt1"],
			"salt2" => $secure_data["salt2"],
		);

		$results = $this->model->register($params);
		$new_user_id = $results[0];
		$access_level = $results[1];


		if ($new_user_id != false && $new_user_id != null && $new_user_id != 0)
		{
			// Create secure user id folder for purchased items
			$this->dirlib = new DirectoryLibrary();
			$this->dirlib->newUser($new_user_id);

			// Log the new user in
			$this->session = new SessionLibrary();
			$this->session->set("loggedin", Variables::$SessionLoggedInCode);
			$this->session->set("user_id", $new_user_id);
			$this->session->set("first_name", $this->first_name);
			$this->session->set("last_name", $this->last_name);
			$this->session->set("email", $this->email);
			//$this->session->set("admin",$this->result["admin"]);
			$this->session->set("access_level", $access_level);

			redirect(Config::$root_absolute_path . "dashboard");
		} else {
			if ($email_used){
				$this->showError("There has been an error registering you, error code 47823.");
				return;
			}
		}


	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	private function showError($message)
	{
		$this->data = [
			"browser_title" => "User registration",
			"meta_description" => "All For The Code user registration.",
			"css_includes" => [

			],
			"js_includes" => [
				
			],
			"view" => "UserRegister/RegisterFailed.php",
			"error_message" => $message,
		];

		$this->generatePage();
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

}