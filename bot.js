##Soundboard Specific configuration##

#Your bots token. If you don't have a token for your bot visit this link to get one. https://discordapp.com/developers/applications/me
#For more information on how to create an application and bot account visit this link https://discordapp.com/developers/docs/topics/oauth2
#To give your bot access to your server go to this link https://discordapp.com/oauth2/authorize?client_id=yourClientID&scope=bot&permissions=0
bot_token=NDMzMzA1NTYzOTM4Njg0OTM4.Da57TA.qkPCoJUdkLuoctjlyn061n8SJEc

#The username to look for and join their channel when a sound is played from the UI
username_to_join_channel=owe owe

#If the bot should respond to chat commands (true|false)
respond_to_chat_commands=true

#This is what you want your commands to start with. Ex: If configured to ? the bot with respond to anyone typing ?list
command_character=?
respond_to_dm=true
leave_suffix=_leave

#Do not set this higher than 2000. This is a limit imposed by Discord and messages will fail if larger than 2000 characters
message_size_limit=2000

#Specify the directory where your sound files are located. If left empty it will look for a
#directory called "sounds/" in same directory the app was executed from.
#If you specify a directory that does not exist yet the application will attempt to create it.
#Example: C:/Users/someUser/Music
sounds_directory=

#List of user ids to respond to chat commands from. The list should be comma separated. If the list is empty the bot will
#repsond to all users.
allowedUserIds=

#List of banned user ids. Also, comma separated. If a user is listed here they will no be able to issues commands to the
#bot through chat.
bannedUserIds=
