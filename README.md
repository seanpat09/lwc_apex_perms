# LWC Apex Permission Enforcement

This app checks Apex access enforcement for LWC. The Home Page has a simple component that will either return `Hello World` if you user has access and `You do not have access to the Apex class named 'TestPermissionController'` if you do not. This repo removes access to the Apex Class `TestPermissionController` for the System Administrator, so you should expect to see the error message.

Note: you will need to change the default Home Page, or simple just drop in the testPermission LWC component somewhere in your app