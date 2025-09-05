import { NextRequest, NextResponse } from 'next/server';
import { site } from '@/lib/config/site';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = [
      'fullName', 'phone', 'email', 'cityState', 
      'cdlClass', 'experience', 'currentlyEmployed', 'smsConsent'
    ];
    
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    if (!body.smsConsent) {
      return NextResponse.json(
        { error: 'SMS consent is required to process driver application' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate CDL class
    const validCdlClasses = ['class-a', 'class-b', 'class-c'];
    if (!validCdlClasses.includes(body.cdlClass)) {
      return NextResponse.json(
        { error: 'Invalid CDL class selection' },
        { status: 400 }
      );
    }

    // Validate experience
    const validExperience = ['2-3', '4-5', '6-10', '10+'];
    if (!validExperience.includes(body.experience)) {
      return NextResponse.json(
        { error: 'Invalid experience selection' },
        { status: 400 }
      );
    }

    // Validate employment status
    const validEmploymentStatus = ['yes', 'no'];
    if (!validEmploymentStatus.includes(body.currentlyEmployed)) {
      return NextResponse.json(
        { error: 'Invalid employment status selection' },
        { status: 400 }
      );
    }

    // Format the driver application data
    const applicationData = {
      fullName: body.fullName,
      phone: body.phone,
      email: body.email,
      cityState: body.cityState,
      cdlClass: body.cdlClass,
      experience: body.experience,
      currentlyEmployed: body.currentlyEmployed,
      smsConsent: body.smsConsent,
      submittedAt: new Date().toISOString()
    };

    // TODO: Implement email sending when mail credentials are available
    // For now, we'll log the application and return success
    console.log('Driver Application Received:', {
      timestamp: new Date().toISOString(),
      applicant: applicationData.fullName,
      location: applicationData.cityState,
      cdlClass: applicationData.cdlClass,
      experience: applicationData.experience,
      currentlyEmployed: applicationData.currentlyEmployed
    });

    // Placeholder for email notification
    // When mail credentials are available, implement:
    // 1. Send confirmation email to driver applicant
    // 2. Send notification email to recruiting team
    // 3. Store application in database if needed

    return NextResponse.json({
      success: true,
      message: 'Driver application submitted successfully',
      applicationId: `DA-${Date.now()}`, // Temporary application ID
      data: {
        fullName: applicationData.fullName,
        submittedAt: applicationData.submittedAt
      }
    });

  } catch (error) {
    console.error('Driver application submission error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}