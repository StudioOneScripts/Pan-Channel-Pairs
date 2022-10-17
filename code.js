function userFunction()
{
	this.interfaces =  [Host.Interfaces.IEditTask]

	this.prepareEdit = function (context)
	{
		return Host.Results.kResultOk;
	}

	// -----------------------------------------------------------------

	this.performEdit = function (context)
	{
		var environment = context.functions.root.environment;
		var console = environment.find ("MixerConsole");
		var channelList = console.getChannelList(1);

		for(i=0;i < channelList.numSelectedChannels; i++)
			{
				var channel = channelList.getSelectedChannel(i)
				
				if (i % 2 == 0)
					channel.pan = 1;
				else
					channel.pan = 0;
			}

		return Host.Results.kResultOk;
	}

}

// ---------------------------------------------------------------------
function createInstance()
{
	return new userFunction();
}


