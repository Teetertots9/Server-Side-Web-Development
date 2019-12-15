SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppUser](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](255) NULL,
	[LastName] [nvarchar](255) NULL,
	[Email] [nvarchar](255) NOT NULL,
	[Password] [nvarchar](255) NOT NULL,
	[Role] [nvarchar](7) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Artist](
	[ArtistId] [int] IDENTITY(1,1) NOT NULL,
	[ArtistName] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ArtistId] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Genre](
	[GenreId] [int] IDENTITY(1,1) NOT NULL,
	[GenreName] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[GenreId] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Album](
	[AlbumId] [int] IDENTITY(1,1) NOT NULL,
	[ArtistId] [int] NULL,
	[GenreId] [int] NULL,
	[AlbumName] [nvarchar](255) NOT NULL,
	[Runtime] [int] NOT NULL,
	[NumSongs] [int] NOT NULL,
	[ReleaseYear] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[AlbumId] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[AppUser] ON 
GO
INSERT [dbo].[AppUser] ([UserId], [FirstName], [LastName], [Email], [Password], [Role]) VALUES (1, N'Alice', N'Admin', N'alice@web.com', N'adminpassword', N'admin')
GO
INSERT [dbo].[AppUser] ([UserId], [FirstName], [LastName], [Email], [Password], [Role]) VALUES (2, N'Ursula', N'User', N'ursula@web.com', N'userpassword', N'user')
GO
SET IDENTITY_INSERT [dbo].[AppUser] OFF
GO
SET IDENTITY_INSERT [dbo].[Artist] ON 
GO
INSERT [dbo].[Artist] ([ArtistId], [ArtistName]) VALUES (1, N'Halestorm')
GO
INSERT [dbo].[Artist] ([ArtistId], [ArtistName]) VALUES (2, N'Thundercat')
GO
INSERT [dbo].[Artist] ([ArtistId], [ArtistName]) VALUES (3, N'Slipknot')
GO
SET IDENTITY_INSERT [dbo].[Artist] OFF
GO
SET IDENTITY_INSERT [dbo].[Genre] ON 
GO
INSERT [dbo].[Genre] ([GenreId], [GenreName]) VALUES (101, N'Rock')
GO
INSERT [dbo].[Genre] ([GenreId], [GenreName]) VALUES (102, N'Hip-Hop')
GO
INSERT [dbo].[Genre] ([GenreId], [GenreName]) VALUES (103, N'Metal')
GO
SET IDENTITY_INSERT [dbo].[Genre] OFF
GO
SET IDENTITY_INSERT [dbo].[Album] ON 
GO
INSERT [dbo].[Album] ([AlbumId],[ArtistId],[GenreId],[AlbumName], [Runtime],[NumSongs],[ReleaseYear]) VALUES (1001, 1, 101, N'Into The Wild Life', 56, 15, N'2015')
GO
INSERT [dbo].[Album] ([AlbumId],[ArtistId],[GenreId],[AlbumName], [Runtime],[NumSongs],[ReleaseYear]) VALUES (1002, 2, 102, N'Drunk', 51, 23, N'2017')
GO
INSERT [dbo].[Album] ([AlbumId],[ArtistId],[GenreId],[AlbumName], [Runtime],[NumSongs],[ReleaseYear]) VALUES (1003, 3, 103, N'We Are Not Your Kind', 63, 14, N'2019')
GO
SET IDENTITY_INSERT [dbo].[Album] OFF
GO
ALTER TABLE [dbo].[Album]  WITH CHECK ADD FOREIGN KEY([ArtistId])
REFERENCES [dbo].[Artist] ([ArtistId])
GO
ALTER TABLE [dbo].[Album]  WITH CHECK ADD FOREIGN KEY([GenreId])
REFERENCES [dbo].[Genre] ([GenreId])
GO