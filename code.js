function panChannelPairs()
{
	this.interfaces =  [Host.Interfaces.IEditTask]

	this.prepareEdit = function (context)
	{
		return Host.Results.kResultOk;
	}

	// -----------------------------------------------------------------

	this.performEdit = function (context)
	{
		// opposite pan pairs of selected channels
		var environment = context.functions.root.environment;
		var console = environment.find ("MixerConsole");
		var channelList = console.getChannelList(1);

		for(i=0;i < channelList.numSelectedChannels; i++)
		{ 
			var channel = channelList.getSelectedChannel(i)
	
			if (i % 2 == 0)  		// odd 	 
				channel.pan = 1;   	// left
			else					// even 	
				channel.pan = 0;  	// right
		}

		return Host.Results.kResultOk;
	}
}

// ---------------------------------------------------------------------
function createInstance()
{
	return new panChannelPairs();
}


