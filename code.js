function panChannelPairs()
{
	this.interfaces =  [Host.Interfaces.IEditTask]

	this.prepareEdit = function (context)
	{
		return Host.Results.kResultOk;
	}

	// ------  OPPOSITE PAN CONSECUTIVE SELECTED MIXER CHANNELS --------

	this.performEdit = function (context)
	{
		// opposite pan pairs of selected channels
		var environment = context.functions.root.environment;
		var console = environment.find ("MixerConsole");
		var channelList = console.getChannelList(1);

		for(i=0;i < channelList.numSelectedChannels; i++)
<<<<<<< HEAD
		{ 
			var channel = channelList.getSelectedChannel(i)
	
			if (i % 2 == 0)  		// odd 	 
				channel.pan = 1;   	// left
			else					// even 	
				channel.pan = 0;  	// right
		}
=======
			{
				var channel = channelList.getSelectedChannel(i)
				
				if (i % 2 == 0)
					channel.pan = 1;  // pan left
				else
					channel.pan = 0;  // pan right
			}
>>>>>>> 70a0ac73325086da3f7fc242f68795347f270831

		return Host.Results.kResultOk;
	}
}

// ---------------------------------------------------------------------
function createInstance()
{
	return new panChannelPairs();
}


