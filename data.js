var history_events = [
	//{begins : "-40000", text : 'Cro-Magnons enter Europe from Near East', tag: ['europe']},
	//{begins : "-35000", text : 'First Americans cross from Asia', tag: ['americas']},
	//{begins : "-30000", text : 'Neanderthals disappear', tag: ['europe']},
	//{begins : "-30000", text : 'People reach Australia', tag: ['australia']},
	//{begins : "-25000", text : 'Cave Dwellers in Brazil', tag: ['americas']},
	//{begins : "-5000", text : 'Maize grown in Mexico', tag: ['americas', 'farming']},
	//{begins : "-3500", text : 'Potatoes grown in South America', tag: ['americas', 'farming']},
	//{begins : "-3372", text : 'First date in Mayan Calendar', tag: ['americas', 'science']},
	{begins : "-2575", ends : "-2134", text : 'Old Kingdom of Egypt', tag: ['egypt']},
	{begins : "-2200", ends : "-1450", text : 'Minoan Civilisation', tag: ['europe']},
	{begins : "-2040", ends : "-1640", text : 'Middle Kingdom of Egypt', tag: ['egypt']},
	//{begins : "-2000", text : 'Cotton grown in Peru', tag: ['americas', 'farming']},
	{begins : "-1550", ends : "-1070", text : 'New Kingdom of Egypt', tag: ['egypt']},
	//{begins : "-1500", text : 'Stone Temples built in Mexico', tag: ['americas']},
	{begins : "-431", ends : "-404", text : 'Peloponnesian War', tag: ['ancient-greece'], wikipedia :"http://en.wikipedia.org/wiki/Peloponnesian_War"},

	//{begins : "0", text : 'Birth of Christ', tag: ['middle-east']},
	{begins : "330", ends : "1453", text : 'Byzantine Empire'},
	{begins : "1206", ends : "1368", text : 'Mongol Conquests'},
	{begins : "1583", ends : "1914", text : 'British Empire'},
	{begins : "1660", ends : "1662", text : 'Qing Dynasty conquers Ming Dynasty'},
	{begins : "1775", ends : "1783", text : 'American Revolutionary War'},
	{begins : "1789", ends : "1799", text : 'French Revolution'},
	{begins : "1803", ends : "1815", text : 'Napoleonic Wars'},
	{begins : "1914", ends : "1918", text : 'World War I'},
	{begins : "1939", ends : "1945", text : 'World War II'},
	{begins : "1945", ends : "1991", text : 'Cold War'},
	{begins : "1991", ends : "2001", text : 'Yugoslav Wars'},
	{begins : "2001", ends : "2010", text : 'War in Afghanistan'},
	{begins : "2010", text : 'Present day', detail : 'Created 27 December 2009'},
	
];

var history_people = [
	//Cyrus the Great
	{begins : "-576", ends : "-530",
	 text : "Cyrus The Great",
	 subtitle : "King of Persia, King of Anshan, King of Media, King of Babylon, King of Sumer and Akkad, King of the four corners of the World",
	 civilisation : "persia", 
	 wikipedia : 'http://en.wikipedia.org/wiki/Cyrus_the_Great' },

	// Pythagoras 
	{begins : "-570", ends : "-495", 
	text : "Pythagoras", 
	civilisation : "greece", 
	wikipedia : 'http://en.wikipedia.org/wiki/Pythagoras'},

	//Darius the Great
	{begins : "-550", ends : "-486",
	 text : "Darius I of Persia",
	 civilisation : "persia", 
	 wikipedia : 'http://en.wikipedia.org/wiki/Darius_I_of_Persia' },
	
	// Leonidas 
	{begins : "-540", ends : "-480-08-11", 
	text : "Leonidas", 
	civilisation : "greece",
	wikipedia : 'http://en.wikipedia.org/wiki/Leonidas'},
	 
	// Socrates 
	{begins : "-469", ends : "-399", 
	text : "Socrates", 
	civilisation : "greece", 
	wikipedia : 'http://en.wikipedia.org/wiki/Socrates'},

	// Plato 
	{begins : "-428", ends : "-348", 
	text : "Plato", 
	civilisation : "greece", 
	wikipedia : 'http://en.wikipedia.org/wiki/Plato'},
	 
	// Aristotle 
	{begins : "-384", ends : "-322", 
	text : "Aristotle",
	civilisation : "greece", 
	wikipedia : 'http://en.wikipedia.org/wiki/Aristotle'}, 
	 
	// Alexander The Great 
	{begins : "-356", ends : "-323", 
	text : "Alexander The Great", 
	civilisation : 'greece',
	wikipedia : 'http://en.wikipedia.org/wiki/Alexander_the_Great'},
	
	// Julius Caeser
	{begins : "-100", ends : "-44", 
	text : "Julius Caesar", 
	civilisation : 'rome',
	wikipedia : 'http://en.wikipedia.org/wiki/Julius_caesar'},

	// Cleopatra
	{begins : "-69", ends : "-30", 
	text : "Cleopatra", 
	wikipedia : 'http://en.wikipedia.org/wiki/Cleopatra'},
	
	// Emperor Justinian
	{begins : "483", ends : "565-11-14",
	text : "Justinian",
	civilisation : 'byzantine',
	wikipedia : 'http://en.wikipedia.org/wiki/Justinian' },
	
	//Eric the Red
	{begins : "950", ends : "1003",
	text : "Eric the Red",
	civilisation : 'viking',
	wikipedia : 'http://en.wikipedia.org/wiki/Erik_the_Red' },
	
	//Macbeth
	{begins : "1005", ends : "1057",
	text : "Macbeth",
	civilisation : 'scotland',
	wikipedia : 'http://en.wikipedia.org/wiki/Macbeth_I_of_Scotland',
	tags : ['king-scotland'] },
	
	// William I
	{begins : "1142", ends : "1214-12-14",
	text : "William I of Scotland",
	civilisation : 'scotland',
	wikipedia : 'http://en.wikipedia.org/wiki/William_I_of_Scotland',
	tags : ['king-scotland'] },

	// Genghis Khan
	{begins : "1162", ends : "1227",
	text : "Genghis Khan",
	civilisation : 'mongol',
	wikipedia : 'http://en.wikipedia.org/wiki/Genghis_khan'},
	
	// Leonardo Da Vinci
	{begins : "1452-04-15", ends : "1519-05-02",
	text : "Leonardo Da Vinci", 
	wikipedia : "http://en.wikipedia.org/wiki/Da_vinci"},

	
	// Henry VIII
	{begins : "1491-06-28", ends : "1547-01-28",
	text : "Henry VIII of England", 
	wikipedia : "http://en.wikipedia.org/wiki/Henry_the_Eighth"},
	
	//Isaac Newton
	{begins : "1643-01-04", ends : "1727-03-31",
	text : "Isaac Newton",
	wikipedia : "http://en.wikipedia.org/wiki/Isaac_newton" },
	
	//Abraham Lincoln
	{begins : "1809-02-12", ends : "1865-04-15", 
	text : "Abraham Lincoln",
	wikipedia : "http://en.wikipedia.org/wiki/Abraham_Lincoln"
	},
	
	//Winston Churchill
	{begins : "1874-11-30", ends : "1965-01-24",
	text : "Winston Churchill", 
	wikipedia : "http://en.wikipedia.org/wiki/Churchill" }
]; 


var history_data = history_events.concat(history_people);