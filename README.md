# Class

# Function

## `ArtworkComponent(props: artworkProps, props.id: string, props.imageUri: string, props.artistName: string, props.artworkName: string, props.artistId: string): *`

Component displaying an Artwork with image, name and artist name <img src="https://drive.google.com/uc?export=view&id=19vamBJAY1JchpK47QNtNfrkuGSZwz120" alt="AllMyArtistsMockup" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | artworkProps |  |
| props.id | string |  | ID of the artwork |
| props.imageUri | string |  | URI of the image |
| props.artistName | string |  | Name of the Artist |
| props.artworkName | string |  | Name of the artwork |
| props.artistId | string |  | ID of the artist |

## `LikedArtworksCarousel(): *`

Component displaying an {@link ArtworkCarouselSingle} of liked artworks <img src="https://drive.google.com/uc?export=view&id=17_yTpjYuS72FhFQ6SZGlj8Opw5MBNRSe" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `PaintingsMatchedFromSource(props: PaintingsMatchedFromSourceProps, props.paintingId: string, props.matchingType: string): *`

Component displaying an {@link ArtworkCarouselDouble} of matched artworks <img src="https://drive.google.com/uc?export=view&id=1P-OOAmbxkpiDfb9I9mGkj2NMLePBXLaf" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | PaintingsMatchedFromSourceProps |  |
| props.paintingId | string |  | ID of the artwork |
| props.matchingType | string |  | Type of matching (Color, Genre, Origin, ...) |

## `MostMatchedComponent(): *`

Component displaying an {@link ArtworkCarouselDouble} of the most matched artworks for the last 30 days //TODO IMAGE

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `PaintingsFromSameArtistComponent(props: PaintingsFromSameArtistProps, props.artistId: string): *`

Component displaying an {@link ArtworkCarouselDouble} of artworks from the same artist as artistId <img src="https://drive.google.com/uc?export=view&id=1OmJnk8nQRJG-nkCNVO9paEYwhM0Wd64d" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | PaintingsFromSameArtistProps |  |
| props.artistId | string |  | ID of the artist |

## `ArtworkCarouselDouble(props: artworkCarouselDoubleProps, props.title: string, props.data: Artwork[] | undefined, props.navigated: void): *`

Component rendering a horizontally scrollable double carousel of artworks

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | artworkCarouselDoubleProps |  |
| props.title | string |  | Name of the Carousel |
| props.data | Artwork[] | undefined |  | Array of artworks |
| props.navigated | void |  | Navigation destination |

## `ArtworkCarouselSingle(props: artworkCarouselSingleProps, props.data: Artwork[] | undefined): *`

Component rendering a horizontally scrollable double carousel of artworks

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | artworkCarouselSingleProps |  |
| props.data | Artwork[] | undefined |  | Array of artworks |

## `MatchingByColorGrid(props: MatchingByColorGridProps, props.color: string): *`

Component displaying an {@link ArtworkGrid} of artworks matched by color with {@link props.color}

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | MatchingByColorGridProps |  |
| props.color | string |  | Color picked by the user |

## `ArtworkGrid(props: ArtworkGridProps, props.title: string, props.data: Artwork[] | []): *`

Component displaying a vertical scrollable grid of artworks

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | ArtworkGridProps |  |
| props.title | string | optional: true | Name of the grid |
| props.data | Artwork[] | [] |  | Array of artworks |

## `ArtworkGridTabView(props: ArtworkGridTabViewProps, props.data: Artwork[]): *`

Component used in {@link ArtworkPage} for displaying a tab composed of a vertical artwork grid

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | ArtworkGridTabViewProps |  |
| props.data | Artwork[] |  | Array of artworks |

## `HeaderDetailedPage(props: HeaderDetailPageProps, props.title: string, props.setModalNewList(modalNewList: boolean): void, props.setModalAddToList(modalAddToList: boolean): void): *`

Component displaying a header for detailed pages

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | HeaderDetailPageProps |  |
| props.title | string |  | Title of the header |
| props.setModalNewList(modalNewList: boolean) | void | optional: true | Toggles NewListModal visibility |
| props.setModalAddToList(modalAddToList: boolean) | void | optional: true | Toggles AddToListModal visibility |

## `generateColor(): *`

Function used to generate a random color when mounting the component for the first time

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `DiscoverByColor(): *`

Component displaying a {@link ArtworkCarouselSingle} of similar color artworks and a button letting the user choose the color he wants

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `ExploreComponent(): *`

Component used in {@link ExplorePage} composed of {@link MostMatchedComponent}, {@link RandomArtists} and {@link DiscoverByColor} <img src="https://drive.google.com/uc?export=view&id=1Jsy_xfP03llSgeLAAk-x0ybLsiWr-Nuf" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `ArrowUpIcon(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `ArrowDownIcon(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `TickIcon(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `FilterModal(props: FilterModalProps, props.filter: Object, props.setFilter(filter:: void, props.isModalVisible: boolean, props.setModalVisible(isModalVisible:: void): *`

Component used to filter search in the {@link ExplorePage} <img src="https://drive.google.com/uc?export=view&id=1iU5fIyy5IP-DnEbLu2Vi0PfGTOxgjVa7" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | FilterModalProps |  |
| props.filter | Object |  | Filters chosen by the user |
| props.setFilter(filter: | void |  | any) - Function for setting new filters on change |
| props.isModalVisible | boolean |  | Modal visibility |
| props.setModalVisible(isModalVisible: | void |  | boolean) - Function for toggling modal visibility |

## `HeaderArtistNonUser(props: HeaderArtistNonUserProps, props.imageUri: string, props.artistName: string, props.scrollY: Animated.Value, props.onClickImage: boolean, props.setOnClickImage: void): *`

Component displaying a header for {@link ArtistPage} <img src="https://drive.google.com/uc?export=view&id=1blw6wW1IkP-TcNxOzJK3UEaeHLoVvAgp" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | HeaderArtistNonUserProps |  |
| props.imageUri | string |  | URI of the banner |
| props.artistName | string |  | Name of the artist |
| props.scrollY | Animated.Value |  | Value of the scroll position |
| props.onClickImage | boolean |  | Visibility OnClickImageModal |
| props.setOnClickImage | void |  | Toggles visibility OnClickImageModal |

## `HeaderArtwork(props: HeaderArtworkProps, props.imageUri: string, props.artworkName: string, props.artistName: string, props.onClickImage: boolean, props.setOnClickImage: void, props.IdArtwork: string, props.addToList: void): *`

Component displaying a header for {@link ArtworkPage}

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | HeaderArtworkProps |  |
| props.imageUri | string |  | URI of the banner |
| props.artworkName | string |  | Name of the artwork |
| props.artistName | string |  | Name of the artist |
| props.onClickImage | boolean |  | Visibility {@link OnClickImage} |
| props.setOnClickImage | void |  | Toggles visibility OnClickImageModal |
| props.IdArtwork | string |  | ID of the artwork |
| props.addToList | void |  | Toggles visibility {@link AddToListModal} |

## `HeaderEditProfileComponent(props: *): *`

Component displaying a header for {@link EditProfile} <img src="https://drive.google.com/uc?export=view&id=1CWGP8Gbqny20kHi_eQsAz77nok35_hZD" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | * | nullable: undefined |

## `HeaderUserComponent(): *`

Component displaying a header for {@link MyProfile} <img src="https://drive.google.com/uc?export=view&id=1pJfX0qTnlTGwbiHLdjJDZdHpbHvsP8XS" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `ImagePickerComponent(props: ImagePickerProps, props.isImagePickerVisible: boolean, props.setImagePickerVisible: void, props.result: any, props.setResult: void, props.callback: void): *`

Component used to upload a picture of the user (from his files or his camera) <img src="https://drive.google.com/uc?export=view&id=13AMfMb0I_wcBY2S0SN77OTnvsTkzsphu" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | ImagePickerProps |  |
| props.isImagePickerVisible | boolean |  | Visibility of ImagePickerModal |
| props.setImagePickerVisible | void |  | Toggles visibility of ImagePickerModal |
| props.result | any |  | Parsed object corresponding to the image picked |
| props.setResult | void |  | Function setting the result |
| props.callback | void |  | Function called when the upload is over |

## `Information(props: InformationProps, props.title: string, props.text: string, props.artworkId: string): *`

Component displaying information for an {@link ArtistPage} (bio) or an {@link ArtworkPage} (summary) <img src="https://drive.google.com/uc?export=view&id=1XvgPAkaGCqyw1HeGlrxqne2KEsim78dr" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | InformationProps |  |
| props.title | string |  | Title of the section |
| props.text | string |  | Text |
| props.artworkId | string | optional: true | If used in artworkPage, displays the {@link ArtworkMoreInfo} modal |

## `LocationPickerComponent(props: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | * |  |

## `AddToListModal(props: AddToListModal, props.modalVisible: boolean, props.setModalVisible: void): *`

Component displaying a modal for the user to add an {@link Artwork} to a list <img src="https://drive.google.com/uc?export=view&id=16poHiJGmBRyJ0TvVtaA-fpn8OUm-dEP8" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | AddToListModal |  |
| props.modalVisible | boolean |  | Visibility of the modal |
| props.setModalVisible | void |  | Toggles the visibility of the modal |

## `ColorPickerModal(props: ColorPickerModalProps, props.isModalVisible: boolean, props.setModalVisible: void, props.color: string, props.setColor: void): *`

Component displaying a color picking wheel and returning the hex code of the color chosen <img src="https://drive.google.com/uc?export=view&id=1r0yVFnKJgkRHv2UFwZ9q-lbpDYpojqDt" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | ColorPickerModalProps |  |
| props.isModalVisible | boolean |  | Visibility of the modal |
| props.setModalVisible | void |  | Toggles visibility of the modal |
| props.color | string |  | Color picked by the user |
| props.setColor | void |  | Function setting the color |

## `EditListModal(props: EditListModalProps, props.listId: string, props.modalVisible: boolean, props.setModalVisible: void): *`

Component displaying a modal letting the user edit a list <img src="https://drive.google.com/uc?export=view&id=14SY-HakPSZQbc8D2DOVFbwPzQhrUMZBr" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | EditListModalProps |  |
| props.listId | string |  | ID of the list |
| props.modalVisible | boolean |  | Visibility of the modal |
| props.setModalVisible | void |  | Toggles the visibility of the modal |

## `ModalMatchingImage(props: *): *`

Component displaying a header for {@link EditProfile} <img src="https://drive.google.com/uc?export=view&id=1CWGP8Gbqny20kHi_eQsAz77nok35_hZD" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | * |  | : ModalMatchingImageProps |

## `NewListModal(props: NewListModalProps, props.modalNewList: boolean, props.setModalVisible: void): *`

Component displaying a modal letting the user create a new list <img src="https://drive.google.com/uc?export=view&id=1Wfk4UNBoJrPdj5u-Oe32GG-95qi_1wAz" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | NewListModalProps |  |
| props.modalNewList | boolean |  | Visibility of the modal |
| props.setModalVisible | void |  | Toggles the visibility of the modal |

## `ThreeDotsProfileModal(props: ThreeDotsProfileModalProps, props.modalVisible: boolean, props.setModalVisible: void): *`

Component displaying a modal for the three dots button on the {@link MyProfile} page <img src="https://drive.google.com/uc?export=view&id=1IQROT4EQsALaqbd6h3fz75G52H6f16cb" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | ThreeDotsProfileModalProps |  |
| props.modalVisible | boolean |  | Visibility of the modal |
| props.setModalVisible | void |  | Toggles the visibility of the modal |

## `ArtworkMoreInfo(props: ArtworkMoreInfoProps, props.artworkId: string): *`

Component displaying a {@link MoreInformation} component for artists

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | ArtworkMoreInfoProps |  |
| props.artworkId | string |  | ID of the artist |

## `ArtworkMoreInfo(props: ArtworkMoreInfoProps, props.artworkId: string): *`

Component displaying a {@link MoreInformation} component for artworks <img src="https://drive.google.com/uc?export=view&id=1yONEksxbzC_kw4XeS8KIZCh62cWSEGdU" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | ArtworkMoreInfoProps |  |
| props.artworkId | string |  | ID of the artwork |

## `MoreInformation(props: MoreInfoProps, props.data: Object, props.data.artworkName: string, props.data.artistName: string, props.data.artistDOB: string, props.data.artistDOD: string, props.data.date: string, props.data.summary: string, props.data.style: string, props.data.dimensions: string, props.data.genre: string, props.data.keywords: string[]): *`

Component displaying a button which opens a modal with more information about an artist or an artwork

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | MoreInfoProps |  |
| props.data | Object |  |
| props.data.artworkName | string |  | Name of the artwork |
| props.data.artistName | string |  | Name of the artist |
| props.data.artistDOB | string |  | Date of birth of the artist |
| props.data.artistDOD | string |  | Date of death of the artist |
| props.data.date | string |  | Date of the artwork |
| props.data.summary | string |  | Summary of the artwork |
| props.data.style | string |  | Style of the artwork |
| props.data.dimensions | string |  | Dimensions of the artwork |
| props.data.genre | string |  | Genre of the artwork |
| props.data.keywords | string[] |  | Keywords linked to the artwork |

## `SearchArtworkGridComponent(props: SearchArtworkGridComponentProps, props.searchPhrase: string, props.setClicked: any, props.data: [Artwork] | []): *`

Component displaying the results of a search in the {@link ExplorePage} <img src="https://drive.google.com/uc?export=view&id=1z_d54-i6xrvPihfc_yVchu7SgCbaWI-_" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | SearchArtworkGridComponentProps |  |
| props.searchPhrase | string |  | Text in the searchBar |
| props.setClicked | any |  | Is the searchBar clicked ? |
| props.data | [Artwork] | [] |  | Array of artworks fetched from the search |

## `CommentBar(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `HeaderMainPage(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `HeaderPost(props: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | * | nullable: undefined |

## `MessageGrid(props: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | * | nullable: undefined |

## `MessagePreviewComponent(props: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | * | nullable: undefined |

## `NewPostButton(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `NewPostHeader(props: newPostHeaderProps): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | newPostHeaderProps |  |

## `NewPostText(props: newPostTextProps): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | newPostTextProps |  |

## `NotificationComponent(props: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | * | nullable: undefined |

## `NotificationGrid(props: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | * | nullable: undefined |

## `OptionComponent(props: optionComponentProps): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | optionComponentProps |  |

## `PostAnalysis(props: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | * | nullable: undefined |

## `PostComment(props: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | * | nullable: undefined |

## `PostPainting(props: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | * | nullable: undefined |

## `PostSocial(props: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | * | nullable: undefined |

## `RepostPost(props: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | * | nullable: undefined |

## `ThreeDotsComponent(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `ToolBarPainting(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `ToolBarPost(props: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | * | nullable: undefined |

## `ArtistComponent(props: ArtistComponentProps, props.id: string, props.title: string, props.imageUri: string): *`

Component used to display an artist with an image and his name <img src="https://drive.google.com/uc?export=view&id=1uvt8qkC5FZjtlsEInLR3OhrN7S7jqdLr" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | ArtistComponentProps |  |
| props.id | string |  | ID of the artist |
| props.title | string |  | Name of the artist |
| props.imageUri | string |  | URI of the artist's image |

## `ListComponent(props: ListComponentProps, props.id: string, props.title: string, props.fourImages: [string], props.action: ListActions): *`

Component used to display a list with an image and its name <img src="https://drive.google.com/uc?export=view&id=16v03MPIhiC6YE1GAaVGF-4pfavKDX078" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | ListComponentProps |  |
| props.id | string |  | ID of the list |
| props.title | string |  | Name of the list |
| props.fourImages | [string] |  | URI of the list image |
| props.action | ListActions |  | Type of action |

## `ArtistGrid(props: ArtistGridProps, props.title: string, props.data: [Artist] | [], props.navigate: void): *`

Component used to display a button + grid of artists

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | ArtistGridProps |  |
| props.title | string |  | Title of the grid |
| props.data | [Artist] | [] |  | An array of {@link Artist} |
| props.navigate | void | optional: true | Function used for navigation |

## `ListGridComponent(props: ListGridProps, props.title: string, props.data: [List] | [], props.action: ListActions): *`

Component used to display a button + grid of lists

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | ListGridProps |  |
| props.title | string |  | Title of the grid |
| props.data | [List] | [] |  | An array of {@link List} |
| props.action | ListActions | optional: true | Type of action |

## `MyLikedArtists(): *`

Component used to display an {@link ArtistGrid} of the user's liked artists <img src="https://drive.google.com/uc?export=view&id=1Pgk0bWTRAdnPszMAHLiKggq3S_6T4fzJ" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `MyListsComponent(props: MyListsComponentProps, props.action: ListActions): *`

Component used to display an {@link ListGridComponent} of the user's lists <img src="https://drive.google.com/uc?export=view&id=1LZHELWGMb2z2E62Y6SaxzP0xm9vpvrcm" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | MyListsComponentProps |  |
| props.action | ListActions |  | Type of action |

## `RandomArtists(): *`

Component used to display a grid of 4 random artists <img src="https://drive.google.com/uc?export=view&id=1X0y_I7F3dmmADJcxTdgsCpijOvuY7dRt" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `SimilarArtists(props: SimilarArtistsProps, props.artistId: string): *`

Component used to display a grid of 4 similar artists <img src="https://drive.google.com/uc?export=view&id=1tqlaBZP2Zc17YwnecW01Ftg8_7Igb26W" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | SimilarArtistsProps |  |
| props.artistId | string |  | ID of the artist |

## `SquareComponentGrid(props: SquareComponentGridProps, props.title: string, props.data: Artist[] | List[] | [], props.type: SquareComponentType, props.action: ListActions): *`

Component used to display a square component according to its {@link SquareComponentType}

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | SquareComponentGridProps |  |
| props.title | string |  | Title of the grid |
| props.data | Artist[] | List[] | [] |  | Array of {@link Artist} or {@link List} |
| props.type | SquareComponentType |  | Type of {@link SquareComponentType} |
| props.action | ListActions | optional: true | Type of action |

## `UserData(): *`

Component displaying the user's data (FOLLOWING/FOLLOWERS/CONNECTIONS) in {@link MyProfile} <img src="https://drive.google.com/uc?export=view&id=1YGroO4InY45ho6io6yUwwjcPTKjMZPE2" alt="ArtworkPage" height="100">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `BackButtonComponent(): *`

Component displaying a Back Button, used to go back to the previous page <img src="https://drive.google.com/uc?export=view&id=1j6HDoX10oAeKhhDfwYUGs3Ns3B63-5Yp" alt="ArtworkPage" height="100">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `BiographyInput(props: BiographyInputProps, props.credentialsNeeded: string, props.value: string, props.setValue: any): *`

Component displaying an input field for the user to insert his bio in {@link EditProfile} page <img src="https://drive.google.com/uc?export=view&id=1PEq6_DIXaVY55LWLF3UDYvXtOmNp6_uH" alt="ArtworkPage" height="100">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | BiographyInputProps |  |
| props.credentialsNeeded | string |  | Title of the credential field |
| props.value | string |  | Value of the text input |
| props.setValue | any |  | Function used to set the value |

## `CredentialsInputComponent(props: CredentialsInputProps, props.credentialsNeeded: string, props.value: string, props.setValue: any): *`

Component displaying an input field for the user to insert his credentials in {@link Login} and {@link SignUp} pages <img src="https://drive.google.com/uc?export=view&id=1IO8nhdGFahbBJki-0lGEoZY8lRuYdWDP" alt="ArtworkPage" height="100">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | CredentialsInputProps |  |
| props.credentialsNeeded | string |  | Title of the credential field |
| props.value | string |  | Value of the text input |
| props.setValue | any |  | Function used to set the value |

## `EditProfileInput(props: EditProfileInputProps, props.credentialsNeeded: string, props.value: string, props.setValue: any, props.placeholder: string): *`

Component displaying an input field for the user to insert his credentials in {@link EditProfile} page <img src="https://drive.google.com/uc?export=view&id=1a6PLfPkQBZdoJhF0VNDoFoea7Hgt_RyJ" alt="ArtworkPage" height="100">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | EditProfileInputProps |  |
| props.credentialsNeeded | string |  | Title of the credential field |
| props.value | string |  | Value of the text input |
| props.setValue | any |  | Function used to set the value |
| props.placeholder | string |  | Default placeholder for the field |

## `Index(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `NewSearchBar(props: SearchBarProps, props.clicked: boolean, props.searchPhrase: string, props.setSearchPhrase: any, props.setClicked: any, props.filter: Object, props.filter.styleFilter: string, props.filter.genreFilter: string, props.filter.nationalityFilter: string, props.filter: Function, props.setFilter.styleFilter: string, props.setFilter.genreFilter: string, props.setFilter.nationalityFilter: string): *`

Component displaying a searchBar used in {@link ExplorePage} <img src="https://drive.google.com/uc?export=view&id=10adsPmFxl7T0smH3oiT75BiJSEAvTChV" alt="ArtworkPage" height="100">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | SearchBarProps |  |
| props.clicked | boolean |  | Boolean checking if the searchbar is clicked |
| props.searchPhrase | string |  | SearchPhrase text in the searchBar |
| props.setSearchPhrase | any |  | Function to set the searchPhrase |
| props.setClicked | any |  | Function to set {props.clicked} |
| props.filter | Object |  | Object containing the filters |
| props.filter.styleFilter | string |  | Style filter |
| props.filter.genreFilter | string |  | Genre filter |
| props.filter.nationalityFilter | string |  | Nationality filter |
| props.filter | Function |  | Function to set the filters |
| props.setFilter.styleFilter | string |  | Set style filter |
| props.setFilter.genreFilter | string |  | Set genre filter |
| props.setFilter.nationalityFilter | string |  | Set nationality filter |

## `OnClickImageComponent(props: onClickImageProps, props.imageUri: string, props.title: string, props.onClickImage: boolean, props.setOnClickImage: void, props.date: string, props.artistName: string): *`

Component displaying a modal for showing an image in fullscreen <img src="https://drive.google.com/uc?export=view&id=10QiizGTQZOLSibKi2GUtNz7XKO7K0qf-" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | onClickImageProps |  |
| props.imageUri | string |  | URI of the image |
| props.title | string |  | Title of the image |
| props.onClickImage | boolean |  | Visibility of the modal |
| props.setOnClickImage | void |  | Toggles the visibility of the modal |
| props.date | string | optional: true | Date of the artwork |
| props.artistName | string | optional: true | Name of the artist |

## `SmallerSearchBar(props: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | * | nullable: undefined |

## `SearchBar(props: *): *`

OLD SEARCHBAR

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | * |  |

## `Tag(props: TagProps, props.title: string): *`

Component for tagging artworks according to keywords <img src="https://drive.google.com/uc?export=view&id=18SR5-hiVTriZ9s34AG31bZWZBinAi1Ia" alt="ArtworkPage" height="100">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | TagProps |  |
| props.title | string |  | Title of the tag |

## `ToastComponent(props: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | * | nullable: undefined |

## `ToolBarListPage(props: ToolBarListPageProps, props.type: PageTypeList, props.listId: string, props.modalVisible: boolean, props.setModalVisible: void, props.addToListModal: boolean, props.setAddToListModal: void): *`

Component displaying the toolbar for the {@link ListContentPage} and {@link AllMyArtworks} <img src="https://drive.google.com/uc?export=view&id=1RD3birE2392NqlnnwkHW18EHkc-cnecG" alt="ArtworkPage" height="100">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| props | ToolBarListPageProps |  |
| props.type | PageTypeList |  | Type of page |
| props.listId | string |  | ID of the list |
| props.modalVisible | boolean |  | Visibility of the EditList modal |
| props.setModalVisible | void |  | Toggles the visibility of the EditList modal |
| props.addToListModal | boolean |  | Visibility of the AddToList modal |
| props.setAddToListModal | void |  | Toggles the visibility of the AddToList modal |

## `ArtistNonUserPage(route: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| route | * |  |

## `CommentsPage(): *`

TODO

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `DetailedScreenSquareComponents(objectPattern: {"route": *, "index": *}): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| objectPattern | {"route": *, "index": *} | nullable: undefined, default: {"route":null,"index":null} |

## `EditProfile(): *`

Page on which the user can edit fields of his profile (First Name, Last Name, Bio, City, Country, IconImage, BannerImage) <img src="https://drive.google.com/uc?export=view&id=1kE2Rf5sJ5bE5drRhAn1yba5plaIyhuoh" alt="EditProfile" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `ExplorePage(): *`

Page on which the user can discover new artworks and artists <img src="https://drive.google.com/uc?export=view&id=1B_EqzN75vi7ylrlq_GALFH1xL5RpdhGA" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `HomeScreen(): *`

TODO

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `ImagePickerTest(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `ListContentPage(route: *): *`

TODO LEO

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| route | * |  |

## `LoginScreen(): *`

Page used for logging in the app <img src="https://drive.google.com/uc?export=view&id=1WcFKurJ5a-S5k91C-symqzRa0Yf_XRSw" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `MatchingByColorPage(route: Object, color: string): *`

Page displaying artworks when the user starts a matching by color

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| route | Object |  |
| color | string |  | Color picked by the user |

## `MessagesPage(): *`

TODO

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `ModalScreen(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `wait(timeout: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| timeout | * | nullable: undefined |

## `MyProfile(): *`

Profile page of the user <img src="https://drive.google.com/uc?export=view&id=1WgHBpa1CEHrexFU6I9vf5w_QyG8-DWAL" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `NewPostPage(): *`

TODO

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `NotFoundScreen(navigation: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| navigation | * |  |

## `NotificationsPage(route: *): *`

TODO

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| route | * |  |

## `OldArtistPage(undefined: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| undefined | * |  |

## `SignUpScreen(): *`

Page used for signing up to the app <img src="https://drive.google.com/uc?export=view&id=1sc4hor1c9Kw9bqdoXmzvuKm8H9I1W2XE" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `TabOneScreen(navigation: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| navigation | * |  |

## `TabTwoScreen(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `ThreeDotsPage(route: *): *`

TODO

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| route | * |  |

## `WelcomeScreen(): *`

Page welcoming the user on first connection <img src="https://drive.google.com/uc?export=view&id=1DQfiwo80xiUo8X_rgmx1Igl3oNf_MC62" alt="ArtworkPage" height="500">

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `signUp(email: string, _password: string, firstName: string, lastName: string): *`

Function executing an API call to post and save the user credentials on signup

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| email | string |  |
| _password | string |  |
| firstName | string |  |
| lastName | string |  |

## `logIn(email: string, _password: string): *`

Function executing an API call to verify the user credentials on log in

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| email | string |  |
| _password | string |  |

## `reloadData(): *`

API call to get the user data on reload

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `deleteArtworks(listToDelete: string[], listId: string | undefined)`

Function executing an API call to delete an artwork from a list

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| listToDelete | string[] |  |
| listId | string | undefined |  |

## `createNewList(listTitle: string)`

Function executing an API call to create a new list

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| listTitle | string |  |

## `updateList(listId: string, newName: string)`

Function executing an API call to update a list

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| listId | string |  |
| newName | string |  |

## `deleteList(listId: string)`

Function executing an API call to delete a list

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| listId | string |  |

## `addArtworksToList(listId: string, selectedArtworks: string[])`

Function executing an API call to add an artwork to a list

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| listId | string |  |
| selectedArtworks | string[] |  |